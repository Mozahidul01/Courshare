import { AiOutlineFile } from "react-icons/ai";

export default function InstructorCard({ img, name, designation, courses }) {
  return (
    <div className="bg-white shadow-md rounded-md sm:my-2 group overflow-hidden cursor-pointer w-fit">
      <div className="overflow-hidden">
        <img
          className="duration-200 ease-in-out group-hover:scale-110 w-fit"
          src={img}
          alt={name}
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm font-medium">{designation}</p>
        </div>
        <div className="flex items-center justify-center  h-[2rem] border border-r border-gray" />
        <div className="flex gap-2 items-center">
          <AiOutlineFile />
          <p>Course: {courses}</p>
        </div>
      </div>
    </div>
  );
}
