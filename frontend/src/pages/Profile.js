import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <div className="bg-slate-300 w-full max-w-md mx-auto flex flex-col justify-center items-center mt-20 p-5 rounded-xl">
      <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
        <div>
          <img src={user?.profilePic} alt="Avarta" />
        </div>
      </div>
      <div className="mt-5">
        <label className="font-bold">Name : {user?.name}</label>
      </div>
      <div className=" mt-5">
        <label className="font-bold">Email {user?.email} </label>
      </div>
      <div className="mt-5">
        <label className="font-bold">Address : {user?.address} </label>
      </div>
      <div className="mt-5">
        <span className="font-bold">Mobile :{user?.mobile}</span>
        <span className="ml-5" type="text"></span>
      </div>
      <button className="bg-red-600 text-white p-2 px-6 mt-5 rounded-2xl">
        Edit
      </button>
    </div>
  );
};

export default Profile;
