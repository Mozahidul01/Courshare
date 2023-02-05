import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CTAContainer({
  subtitle,
  title,
  ctaText,
  ctaTo,
  ctaImg,
}) {
  return (
    <div className="container flex items-center gap-4 shadow-lg rounded-md pl-8 bg-gradient-to-r from-white to-hummingBird">
      <div className="container py-4">
        <p className="text-sm text-teal uppercase font-medium tracking-wide mb-2">
          {subtitle}
        </p>
        <p className="text-xl text-gray capitalize font-bold leading-6 mb-6">
          {title}
        </p>
        <Link
          className="bg-teal text-white flex gap-4 items-center justify-center py-2.5 rounded-md text-lg font-semibold transition-colors ease-in-out duration-300 hover:bg-hummingBird hover:text-black"
          to={ctaTo}
        >
          {ctaText}
          <BsArrowRight />
        </Link>
      </div>
      <div className="container mt-6">
        <img src={ctaImg} alt="ctaImg" />
      </div>
    </div>
  );
}
