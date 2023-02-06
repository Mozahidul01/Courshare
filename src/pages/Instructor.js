import PageHeader from "../components/PageHeader";
import InstructorContainer from "../components/InstructorContainer";
import CTAContainer from "../components/CTAContainer";
import ctaImg from "../assets/cta.png";

export default function Instructor() {
  return (
    <div>
      <PageHeader title="Our Instructor" />
      <InstructorContainer />
      <div className="container mx-auto my-6 px-4">
        <CTAContainer
          subtitle="Learn From Our Platform"
          title="That Take You Next Level"
          ctaText="Top Courses"
          ctaTo="/courses"
          ctaImg={ctaImg}
        />
      </div>
    </div>
  );
}
