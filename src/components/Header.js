import { useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navLinks } from "../Data/data";
import MobileNavlinks from "./MobileNavlinks";
import NavLinks from "./NavLinks";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="sticky w-full top-0 left-0 z-20 backdrop-blur-md bg-white/50 ">
      <div className="container p-2 mx-auto flex items-center justify-between">
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
            <NavLinks key={navLink.id} {...navLink} />
          ))}
        </div>
        <Link to="sign-up" className="btn-secondary">
          Sign Up
        </Link>
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
