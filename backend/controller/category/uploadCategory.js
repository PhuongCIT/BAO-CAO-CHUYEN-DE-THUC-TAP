const uploadProductPermission = require("../../helpers/permission");
const categoryModel = require("../../models/categoryModel");

async function UploadCategoryController(req, res) {
  try {
    const sessionUserId = req.userId;

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }

    const uploadCategory = new categoryModel(req.body);
    const saveCategory = await uploadCategory.save();

    res.status(201).json({
      message: "Category upload successfully",
      error: false,
      success: true,
      data: saveCategory,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UploadCategoryController;
