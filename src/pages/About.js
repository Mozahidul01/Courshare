import AboutContainer from "../components/AboutContainer";
import AccordionsContainer from "../components/AccordionsContainer";
import CTAContainer from "../components/CTAContainer";
import faqImg from "../assets/faq.svg";
import ctaImg1 from "../assets/cta-team.png";
import ctaImg2 from "../assets/cta-course.png";
export default function About() {
  return (
    <div>
      <div className="bg-gradient-to-r from-teal to-hummingBird">
        <p className="text-4xl sm:text-5xl py-16 text-center font-bold text-white">
          About Us
        </p>
      </div>
      <div>
        <AboutContainer
          title="Our Incredible Journey "
          description="Welcome to our online course platform, where lifelong learning is just a click away. Our journey began with a simple idea: to create a place where anyone, anywhere could access high-quality education and fulfill their potential. We started small, with a handful of courses and a dedicated team of instructors, but as we grew, so did our offerings. Today, our platform boasts hundreds of courses in a wide range of subjects, taught by experts from around the world. 
        Our success is due to our commitment to providing the best learning experience possible. From the development of interactive course materials to the creation of a supportive community, everything we do is focused on helping our students succeed. And it's paying off. Every day, we hear stories of how our courses have changed lives, opened up new career opportunities, and sparked a love of learning in people of all ages. 
        We're thrilled to be on this journey with you and can't wait to see where your education will take you. Thank you for choosing our platform and we hope you enjoy the experience!"
          btnTo="/courses"
          btnText="Our Courses"
        />

        <div className="container px-2 sm:my-12 my-6 mx-auto grid gap-6 sm:grid-cols-2 grid-cols-1">
          <CTAContainer
            subtitle="Join Our Team"
            title="Help Other Upgrade their Skill With Your Knowlege"
            ctaTo="/sign-up"
            ctaText="Join Us"
            ctaImg={ctaImg1}
          />
          <CTAContainer
            subtitle="Our Top Courses"
            title="Get The Best Courses & Upgrade Your Skills"
            ctaTo="/courses"
            ctaText="Learn More"
            ctaImg={ctaImg2}
          />
        </div>

        <div className="container my-6 mx-auto grid gap-4 md:grid-cols-2 grid-cols-1">
          <AccordionsContainer />
          <div className="mx-auto">
            <img
              className="md:max-w-fit sm:max-w-[500px] p-4"
              src={faqImg}
              alt="faq-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
