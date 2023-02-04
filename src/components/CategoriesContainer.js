import { motion } from "framer-motion";
import { categories } from "../Data/data";
import Category from "./Category";

export default function CategoriesContainer() {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="section">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-2xl mx-auto">
          Explore the many possibilities for personal and professional growth.
          With courses taught by expert instructors, you can trust that
          you&apos;re getting high-quality education, no matter what your goals
          may be. So why wait? Start learning today!
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </motion.div>
    </div>
  );
}
