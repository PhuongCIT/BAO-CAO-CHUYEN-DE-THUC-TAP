import React from "react";
import CANCLEIMAGE from "../assest/cancle.gif";
import { Link } from "react-router-dom";
const Cancle = () => {
  return (
    <div className="bg-slate-300 w-full max-w-md mx-auto flex flex-col justify-center items-center mt-20 p-5 rounded-xl">
      <img src={CANCLEIMAGE} width={170} alt="" />
      <p className=" mt-5 text-xl font-bold text-red-600">Payment Cancle</p>
      <Link
        to={"/cart"}
        className="p-2 px-3 mt-5 border-2 border-red-600 rounded font-semibold text-red-600 hover:bg-red-600 hover:text-white"
      >
        See Order
      </Link>
    </div>
  );
};

export default Cancle;
