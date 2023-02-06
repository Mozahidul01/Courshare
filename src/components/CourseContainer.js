import CourseCard from "./CourseCard";

export default function CourseContainer({ courses, home }) {
  return (
    <div className="section py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} home={home} />
        ))}
      </div>
    </div>
  );
}
