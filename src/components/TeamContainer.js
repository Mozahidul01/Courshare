import { Link } from "react-router-dom";
import img from "../assets/join-team.jpg";

export default function TeamContainer({ title, description, btnTo, btnTitle }) {
  return (
    <div className="section py-16">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold text-teal sm:text-3xl text-2xl mb-5">
            {title}
          </div>
          <p className="text-sm leading-6 text-gray mb-6">{description}</p>
          <Link to={btnTo} className="btn-more">
            {btnTitle}
          </Link>
        </div>
        <div className="p-4 md:w-4/5 sm:row-start-1">
          <div className="border-4 border-teal rounded-md">
            <img src={img} alt="instructor-img" className="p-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
