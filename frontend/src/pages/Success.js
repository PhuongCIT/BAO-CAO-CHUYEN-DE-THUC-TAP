import React from "react";
import SUCCESSIMAGE from "../assest/success.gif";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="bg-slate-300 w-full max-w-md mx-auto flex flex-col justify-center items-center mt-20 p-5 rounded-xl">
      <img src={SUCCESSIMAGE} width={170} alt="" />
      <p className=" mt-5 text-xl font-bold text-green-600">
        Payment Successfully
      </p>
      <Link
        to={"/order"}
        className="p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white"
      >
        See Order
      </Link>
    </div>
  );
};

export default Success;
