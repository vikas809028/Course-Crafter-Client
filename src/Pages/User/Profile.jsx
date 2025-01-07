/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { getUserData } from "../../Redux/Slices/AuthSlice";
import { cancelCourseBundle } from "../../Redux/Slices/RazorpaySlice";

function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.auth?.data);

  async function handleCancellation() {
    const toastId = toast.loading("Initiating cancellation...");
    try {
      await dispatch(cancelCourseBundle()).unwrap(); // For better error handling
      toast.success("Cancellation completed!");
      await dispatch(getUserData());
    } catch (error) {
      toast.error("Cancellation failed. Please try again.");
    } finally {
      toast.dismiss(toastId);
    }
  }

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex items-center justify-center">
        <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <img
            src={userData?.avatar?.secure_url || "/default-avatar.jpg"}
            alt="User Avatar"
            className="w-40 m-auto rounded-full border border-black"
          />
          <h3 className="text-xl font-semibold text-center capitalize">
            {userData?.fullName || "User Name"}
          </h3>
          <div className="grid grid-cols-2">
            <p>Email: </p>
            <p>{userData?.email || "Not provided"}</p>
            <p>Role: </p>
            <p>{userData?.role || "N/A"}</p>
            <p>Subscription: </p>
            <p>
              {userData?.subscription?.status === "active"
                ? "Active"
                : "Inactive"}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Link
              to="/user/changepassword"
              className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center"
            >
              <button>Change Password</button>
            </Link>
            <Link
              to="/user/editprofile"
              className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center"
            >
              <button>Edit Profile</button>
            </Link>
          </div>
          {userData?.subscription?.status === "active" && (
            <button
              onClick={handleCancellation}
              className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center"
            >
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Profile;
