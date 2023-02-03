import { courses } from "../data";
import Course from "./Course";

export default function CourseContainer() {
  return (
    <div className="section">
      <div className="text-3xl font-bold">
        Our Most <span className="text-teal">Popular Courses</span>
      </div>
      <div className="relative mt-12 overflow-x-hidden w-full">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
