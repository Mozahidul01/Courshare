import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Accordion({ id, question, answer }) {
  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="pb-8">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => handleClick(id)}
      >
        <div className="sm:text-xl text-base font-bold">{question}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300 text-xl`}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
            className="mt-4 mx-4"
          >
            <p className="text-sm leading-6 text-gray">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
