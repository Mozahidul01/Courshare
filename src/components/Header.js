import { useContext, useEffect, useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../Data/data";
import MobileNavlinks from "./MobileNavlinks";
import NavLinks from "./NavLinks";
import { AuthContext } from "../contexts/UserContex";
import { FaUserCircle } from "react-icons/fa";
import UserModal from "./UserModal";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  //change scroll position on changing location
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //User Data From Context API
  const { user } = useContext(AuthContext);

  return (
    <div className="sticky w-full top-0 left-0 z-20 backdrop-blur-md bg-white/50">
      <div className="container p-2 mx-auto flex items-center justify-between min-h-[3.5rem]">
        <div className="flex items-center gap-4">
          <HiMenuAlt1
            className="text-3xl md:hidden cursor-pointer"
            onClick={handleToggle}
          />
        </div>
        <div className="text-xl text-gray-900 uppercase tracking-wide font-bold">
          <Link to="/">CourShare</Link>
        </div>
        <div className="md:flex items-center hidden">
          {navLinks.map((navLink) => (
            <NavLinks
              key={navLink.id}
              {...navLink}
            />
          ))}
        </div>

        {user?.email ? (
          <div className="relative">
            <label
              htmlFor="my-modal"
              className="cursor-pointer"
            >
              <FaUserCircle className="w-7 h-7" />
            </label>
            <UserModal />
          </div>
        ) : (
          <Link
            to="log-in"
            className="btn-action"
          >
            Log In
          </Link>
        )}

        {toggle && (
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed h-screen w-96 top-0 left-0 z-20 bg-teal text-xl text-white flex flex-col justify-center items-center shadow-md gap-8 py-8"
          >
            {navLinks.map((navLink) => (
              <MobileNavlinks
                key={navLink.id}
                {...navLink}
                setToggle={setToggle}
              />
            ))}
            <HiOutlineX
              className="absolute right-12 top-12 text-3xl cursor-pointer"
              onClick={handleToggle}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
