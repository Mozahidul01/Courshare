import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";

export default function AboutContainer({ title, description, btnTo, btnText }) {
  return (
    <div className="section">
      <div className="grid md:grid-cols-2 gap-6 place-items-center">
        <div className="border-4 border-teal rounded-md">
          <img src={aboutImg} alt="about-img" className="p-4" />
        </div>
        <div>
          <div className="font-bold text-teal sm:text-3xl text-2xl mb-5">
            {title}
          </div>
          <div className="text-sm text-gray leading-6 mb-8">
            {description}
            <p className="font-medium text-stone-900 mt-4">
              So why wait? Start your learning journey today and explore the
              exciting world of online courses!
            </p>
          </div>
          {btnText && (
            <Link to={btnTo} className="btn-secondary">
              {btnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
