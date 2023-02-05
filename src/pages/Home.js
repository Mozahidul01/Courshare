import HeroContainer from "../components/HeroContainer";
import AboutContainer from "../components/AboutContainer";
import CategoriesContainer from "../components/CategoriesContainer";
import CourseContainer from "../components/CourseContainer";
import InstructorContainer from "../components/InstructorContainer";
import AccordionsContainer from "../components/AccordionsContainer";
import Newslatter from "../components/Newslatter";

export default function Home() {
  return (
    <div>
      <HeroContainer />
      <AboutContainer
        title="Learn Anywhere, Anytime with Our Online Courses"
        description="With our online format, you can learn at your own pace, from anywhere in the world, on any device. Whether you're a busy professional looking to fit learning into your schedule, or just someone who loves to learn, our platform has something for everyone."
        btnTo="/about"
        btnText="Learn More"
      />
      <CategoriesContainer />
      <CourseContainer />
      <InstructorContainer
        title="Become An Instructor of Our Platfrom"
        description="Are you an expert in your field, passionate about teaching others, and looking for a flexible way to share your knowledge and skills? Then you're a perfect fit for becoming an instructor on our online course platform. With Courshare, you have the opportunity to reach a global audience, make a positive impact, and grow your personal brand. Our platform provides you with everything you need to create and deliver engaging and effective courses, from multimedia tools to automated grading and feedback. Plus, our 24/7 support team is here to help you every step of the way. So why not turn your passion into a profitable venture, and join our growing community of expert instructors today!"
        btnTo="/sign-up"
        btnTitle="Become An Instructor"
      />
      <AccordionsContainer />
      <Newslatter />
    </div>
  );
}
