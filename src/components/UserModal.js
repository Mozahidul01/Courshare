import React, { useContext, useState } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContex";

export default function UserModal() {
  const [error, setError] = useState("");

  //User Data From Context API
  const { user, logOut, uid } = useContext(AuthContext);
  const { displayName, email } = user;

  //LogOut Function
  const handleSignOut = () => {
    logOut()
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        setError("Couldn't log out");
        console.error(err);
      });
  };

  // console.log(user.provideData[0]);

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer h-screen">
        <div className="bg-solitude container w-[18rem] py-6 shadow-xl rounded-lg absolute right-4 sm:right-8 md:right-24 top-16 z-20">
          <div className="flex flex-col justify-center items-center">
            <FaUserCircle className="w-9 h-9 mb-2" />
            <p className="font-semibold capitalize">{displayName}</p>
            <p className="text-sm mb-2">{email}</p>
            <p className="text-xs capitalize">Student Id: {uid}</p>
          </div>
          <div className="divider" />
          <div className="flex flex-col">
            <Link
              to="/profile"
              className="font-semibold px-6 py-2 hover:bg-info"
            >
              Profile
            </Link>
            <Link
              to="/dashboard"
              className="font-semibold px-6 py-2 hover:bg-info"
            >
              Dashboard
            </Link>
            <Link
              to="/courses"
              className="font-semibold px-6 py-2 hover:bg-info"
            >
              Course
            </Link>
            <button
              onClick={handleSignOut}
              className="btn border-none gap-2 font-semibold mx-6 mt-4 transition-color ease-in-out delay-150 hover:bg-error hover:text-neutral "
            >
              LogOut
              <FaSignOutAlt />
            </button>
          </div>
          {error && (
            <p className="text-sm font-medium text-center mt-2 text-red-500">
              {error}
            </p>
          )}
        </div>
      </label>
    </>
  );
}
