import { instructors } from "../Data/data";
import InstructorCard from "./InstructorCard";

export default function InstructorContainer() {
  return (
    <div className="section py-16">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} {...instructor} />
        ))}
      </div>
    </div>
  );
}
