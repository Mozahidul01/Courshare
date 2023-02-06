import { courses } from "../Data/data";
import PageHeader from "../components/PageHeader";
import CourseContainer from "../components/CourseContainer";
import CTAContainer from "../components/CTAContainer";
import ctaImg from "../assets/cta.png";

export default function Courses() {
  return (
    <div>
      <PageHeader title="Our Courses" />
      <CourseContainer courses={courses} />
      <div className="container mx-auto my-6">
        <CTAContainer
          subtitle="Learn From Our Platform"
          title="That Take You Next Level"
          ctaText="Register Now"
          ctaTo="/sign-up"
          ctaImg={ctaImg}
        />
      </div>
    </div>
  );
}
