import { courses } from "../Data/data";
import PageHeader from "../components/PageHeader";
import CourseContainer from "../components/CourseContainer";
import CTAContainer from "../components/CTAContainer";

export default function Courses() {
  return (
    <div>
      <PageHeader title="Our Courses" />
      <CourseContainer courses={courses} />
      <CTAContainer />
    </div>
  );
}
