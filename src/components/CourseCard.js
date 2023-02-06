import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CourseCard({
  image,
  category,
  title,
  instructor,
  rating,
  price,
}) {
  return (
    <div className="p-2 shadow-md bg-white rounded-md">
      <img src={image} alt={title} className="rounded-3xl" />
      <div className="py-4 px-2">
        <p className="text-sm text-teal pb-2">{category}</p>
        <p className="text-lg font-semibold leading-5">{title}</p>
        <div className="flex items-end justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="bg-solitude p-1 rounded-full">
              <AiOutlineUser />
            </div>
            <p className="text-sm font-medium">{instructor}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-solitude p-1 rounded-full">
              <AiOutlineStar className="text-yellow" />
            </div>
            <p className="text-sm font-medium">{rating}</p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-normal font-bold">
            <span className="text-teal">Price: </span> ${price}
          </p>
          <Link to={title} className="btn-secondary">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
}
