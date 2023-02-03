import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

export default function Course({
  image,
  category,
  title,
  participants,
  rating,
  price,
}) {
  return (
    <div className="p-2 shadow-md min-w-[15rem] bg-white rounded-md">
      <img src={image} alt={title} />
      <div className="mt-2 text-xs text-teal">{category}</div>
      <div className="mt-2 text-sm font-bold">{title}</div>
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-solitude p-1 rounded-full">
            <AiOutlineUser />
          </div>
          <div className="text-sm font-bold">{participants}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-solitude p-1 rounded-full">
            <AiOutlineStar className="text-yellow" />
          </div>
          <div className="text-sm font-bold">{rating}</div>
        </div>
        <div className="text-sm font-bold">${price}</div>
      </div>
    </div>
  );
}
