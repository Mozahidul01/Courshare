import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";

export default function AboutContainer() {
  return (
    <div className="section">
      <div className="grid md:grid-cols-2 gap-6 place-items-center">
        <div className="border-4 border-teal rounded-md">
          <img src={aboutImg} alt="about-img" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-3xl text-2xl mb-5">
            Learn Anywhere, Anytime
            <br /> with <span className="text-teal">Our Online Courses</span>
          </div>
          <div className="text-sm text-gray leading-6 mb-8">
            With our online format, you can learn at your own pace, from
            anywhere in the world, on any device. Whether you&apos;re a busy
            professional looking to fit learning into your schedule, or just
            someone who loves to learn, our platform has something for everyone.
            <p className="font-medium text-stone-900 mt-4">
              So why wait? Start your learning journey today and explore the
              exciting world of online courses!
            </p>
          </div>
          <Link
            to="about"
            className="font-semibold px-6 py-3 rounded-md border border-gray text-sm hover:bg-gray hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray transition-all ease-out duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
