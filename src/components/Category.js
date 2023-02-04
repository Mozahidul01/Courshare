import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Category({ icon, category }) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center flex-col gap-4 bg-white p-8 rounded-md flex-wrap"
    >
      <div className="text-4xl text-teal">{icon}</div>
      <p>{category}</p>
      <Link to="services" className="text-sm text-gray">
        View More
      </Link>
    </motion.div>
  );
}
