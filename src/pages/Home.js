import HeroContainer from "../components/HeroContainer";
import AboutContainer from "../components/AboutContainer";
import CategoriesContainer from "../components/CategoriesContainer";
import CourseContainer from "../components/CourseContainer";
import InstructorContainer from "../components/InstructorContainer";
import AccordionsContainer from "../components/AccordionsContainer";

export default function Home() {
  return (
    <div>
      <HeroContainer />
      <AboutContainer />
      <CategoriesContainer />
      <CourseContainer />
      <InstructorContainer />
      <AccordionsContainer />
    </div>
  );
}
