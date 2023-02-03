import { Link } from "react-router-dom";
import instructor from "../assets/inst-design.jpg";

export default function InstructorContainer() {
  return (
    <div className="section">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-3xl text-2xl mb-5">
            Become <span className="text-teal">An Instructor</span>
            <br /> of Our Platfrom
          </div>
          <p className="text-sm leading-6 text-gray mb-6">
            Are you an expert in your field, passionate about teaching others,
            and looking for a flexible way to share your knowledge and skills?
            Then you&apos;re a perfect fit for becoming an instructor on our
            online course platform. With Courshare, you have the opportunity to
            reach a global audience, make a positive impact, and grow your
            personal brand. Our platform provides you with everything you need
            to create and deliver engaging and effective courses, from
            multimedia tools to automated grading and feedback. Plus, our 24/7
            support team is here to help you every step of the way. So why not
            turn your passion into a profitable venture, and join our growing
            community of expert instructors today!
          </p>
          <Link
            to="sign-up"
            className="relative inline-flex items-center justify-start px-6 py-3 mr-4 overflow-hidden text-sm transition-all bg-teal rounded-md hover:bg-teal group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-gray rounded-md" />
            <span className="relative w-full text-white transition-colors duration-250 ease-in-out group-hover:text-white">
              Become Instructor
            </span>
          </Link>
        </div>
        <div className="p-4 md:w-4/5 sm:row-start-1">
          <div className="border-4 border-teal rounded-md">
            <img src={instructor} alt="instructor-img" className="p-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
