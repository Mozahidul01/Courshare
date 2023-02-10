import { Link } from "react-router-dom";
import img from "../assets/maintenance.svg";

export default function Maintenance() {
  return (
    <div className="section">
      <div className="w-full h-fit md:h-screen py-16 md:py-8">
        <div className="xl:w-1/2 text-center">
          <img src={img} alt="maintence" />
          <p className="text-2xl sm:text-3xl font-bold capitalize tracking-wide mt-8">
            This Page under maintenance!
          </p>
          <p className="text-lg sm:text-xl text-gray uppercase mt-4">
            We'll be back soon
          </p>
        </div>
        <center className="pt-8">
          <Link to="/" className="btn-more">
            Go Home
          </Link>
        </center>
      </div>
    </div>
  );
}
