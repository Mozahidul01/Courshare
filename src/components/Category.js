import { Link } from "react-router-dom";

export default function Category({ icon, category }) {
  return (
    <div className="flex items-center flex-col gap-4 bg-white p-8 rounded-md flex-wrap">
      <div className="text-4xl text-teal">{icon}</div>
      <p>{category}</p>
      <Link to="services" className="text-sm text-gray">
        View More
      </Link>
    </div>
  );
}
