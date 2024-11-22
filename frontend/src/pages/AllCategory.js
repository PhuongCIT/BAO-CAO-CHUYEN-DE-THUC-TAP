import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
// import ChangeUserRole from "../components/ChangeUserRole";
import UploadCategory from "../components/UploadCategory";

function AllCategory() {
  const [allCategory, setAllCategory] = useState([]);
  const [openUploadCategory, setOpenUploadCategory] = useState(false);
  //   const [updateUserDetails, setUpdateUserDetails] = useState({
  //     email: "",
  //     name: "",
  //     role: "",
  //     _id: "",
  //   });

  const fetchAllCategory = async () => {
    const fetchData = await fetch(SummaryApi.allCategory.url, {
      method: SummaryApi.allCategory.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllCategory(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
    <div className="">
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Category</h2>
        <button
          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full "
          onClick={() => setOpenUploadCategory(true)}
        >
          Upload Category
        </button>
      </div>
      <div className="bg-white pb-4">
        <table className="w-full userTable">
          <thead>
            <tr className="bg-black text-white">
              <th>#</th>
              <th>Title</th>
              <th>image</th>
              <th>Description</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {allCategory.map((el, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{el?.tile}</td>
                  <td>{el?.image}</td>
                  <td>{el?.description}</td>
                  <td>{moment(el?.createdAt).format("LL")}</td>
                  <td>
                    <button
                      className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                      onClick={() => {
                        // setUpdateUserDetails(el);
                        // setOpenUpdateRole(true);
                      }}
                    >
                      <MdModeEdit />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/**upload prouct component */}
        {openUploadCategory && (
          <UploadCategory
            onClose={() => setOpenUploadCategory(false)}
            fetchData={fetchAllCategory}
          />
        )}

        {/* {openUpdateRole && (
          <ChangeUserRole
            onClose={() => setOpenUpdateRole(false)}
            name={updateUserDetails.name}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
            callFunc={fetchAllCategory}
          />
        )} */}
      </div>
    </div>
  );
}

export default AllCategory;
