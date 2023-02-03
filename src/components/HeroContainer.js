import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import { logos } from "../data";

export default function HeroContainer() {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="section">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-teal mb-4">
            {" "}
            Your e-learning partner
          </div>
          <div className="sm:text-4xl text-3xl uppercase font-bold">
            Unlock your <br /> potential with <br /> Our courses.
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Transform your education with online courses, expert instructors,
            and lifetime access.
          </p>
          <div className="mt-6">
            <Link
              to="log-in"
              className="relative inline-flex items-center justify-start px-6 py-3 mr-4 overflow-hidden text-sm transition-all bg-teal rounded-md hover:bg-teal group"
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-gray rounded-md" />
              <span className="relative w-full text-white transition-colors duration-250 ease-in-out group-hover:text-white">
                Get Started
              </span>
            </Link>
            <Link
              to="courses"
              className="font-semibold px-6 py-2.5 rounded-md border border-gray text-sm hover:bg-gray hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray transition-all ease-out duration-300"
            >
              Discover
            </Link>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="hero-img" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with
          <span className="text-teal">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo) => (
            <motion.div variants={item} className="w-28" key={logo.id}>
              <img src={logo.img} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
