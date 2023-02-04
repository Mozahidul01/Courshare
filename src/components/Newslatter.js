import { motion } from "framer-motion";

export default function Newslatter() {
  return (
    <div className="section">
      <div className="text-center max-w-xl mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe to Our <span className="text-teal">Newsletter</span>
        </div>
        <p className="text-sm leading-6 text-gray">
          Stay informed on learning with our Newsletter. Subscribe for updates
          on new courses,insights, exclusive offers, and valuable resources to
          succeed in your field.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md rounded-l-md sm:w-72 w-60"
          />
          <button
            type="submit"
            className="text-sm text-white bg-teal sm:p-3 p-2 shadow-md font-bold rounded-r-md"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
}
