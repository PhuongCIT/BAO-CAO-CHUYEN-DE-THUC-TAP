const stripe = require("../../config/stripe");
const userModel = require("../../models/userModel");
const paymentController = async (req, res) => {
  try {
    const { cartItems } = req.body;
    console.log("CartItems  =>>", cartItems);
    const user = await userModel.findOne({ _id: req.userId });
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        {
          shipping_rate: "shr_1QFAKUJyZS17CDb4W8uKbObj",
        },
      ],
      customer_email: user.email,
      line_items: cartItems.map((item, index) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.productId.productName,
              image: item.productId.productImage,
              metadata: {
                productId: item.productId._id,
              },
            },
            unit_amount: item.productId.sellingPrice,
          },
          adjustable_quantity: {
            enabled: true,
            minimun: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancle_url: "http://localhost:3000/cancle",
    };
    const session = await stripe.checkout.sessions.create(params);
    res.status(303).json(session);
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
module.exports = paymentController;
