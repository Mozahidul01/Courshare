import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

import JessicaWalsh from "../assets/Jessica-Walsh.jpg";
import ChrisDo from "../assets/Chris-Do.jpg";
import DebbieMillma from "../assets/Debbie-Millman.jpg";
import AndrewNg from "../assets/Andrew-Ng.jpg";
import MariyaZhelyazkova from "../assets/Mariya-Zhelyazkova.jpg";
import DavidKWilliams from "../assets/David-K.-Williams.jpg";
import DanAbramov from "../assets/Dan-Abramov.jpg";
import YasminGreen from "../assets/Yasmin-Green.jpg";
import TimFerriss from "../assets/Tim-Ferriss.jpg";
import DanielKahneman from "../assets/Daniel-Kahneman.jpg";
import SimonSinek from "../assets/Simon-Sinek.jpg";

export const navLinks = [
  {
    id: 1,
    to: "/",
    name: "Home",
  },
  {
    id: 2,
    to: "about",
    name: "About",
  },
  {
    id: 3,
    to: "instructor",
    name: "Instructor",
  },
  {
    id: 4,
    to: "courses",
    name: "Courses",
  },
  {
    id: 5,
    to: "dashboard",
    name: "Dashboard",
  },
];

export const logos = [
  {
    id: 1,
    img: logo1,
  },
  {
    id: 2,
    img: logo2,
  },
  {
    id: 3,
    img: logo3,
  },
  {
    id: 4,
    img: logo4,
  },
  {
    id: 5,
    img: logo5,
  },
  {
    id: 6,
    img: logo6,
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Business",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
  },
];

export const instructors = [
  {
    id: 1,
    img: JessicaWalsh,
    name: "Jessica Walsh",
    designation: "Designer",
    courses: 2,
  },
  {
    id: 2,
    img: ChrisDo,
    name: "Chris Do",
    designation: "Motion Designer",
    courses: 1,
  },
  {
    id: 3,
    img: DebbieMillma,
    name: "Debbie Millman",
    designation: "Designer",
    courses: 2,
  },
  {
    id: 4,
    img: AndrewNg,
    name: "Andrew Ng",
    designation: "AI Developer",
    courses: 1,
  },
  {
    id: 5,
    img: MariyaZhelyazkova,
    name: "Mariya Zhelyazk",
    designation: "Data Scientist",
    courses: 2,
  },
  {
    id: 6,
    img: DavidKWilliams,
    name: "David K. Williams",
    designation: "CEO",
    courses: 2,
  },
  {
    id: 7,
    img: DanAbramov,
    name: "Dan Abramov",
    designation: "Web Developer",
    courses: 1,
  },
  {
    id: 8,
    img: YasminGreen,
    name: "Yasmin Green",
    designation: "AI Analytics",
    courses: 1,
  },
  {
    id: 9,
    img: TimFerriss,
    name: "Tim Ferriss",
    designation: "Coach",
    courses: 1,
  },
  {
    id: 10,
    img: DanielKahneman,
    name: "Daniel Kahneman",
    designation: "Behavioral economics",
    courses: 1,
  },
  {
    id: 11,
    img: SimonSinek,
    name: "Simon Sinek",
    designation: "CEO",
    courses: 1,
  },
];
export const courses = [
  {
    id: 1,
    image: "https://i.imgur.com/whUHoa5.jpg",
    category: "Business",
    title: "Learn how to create Advertising Strategy",
    instructor: "Debbie Millman ",
    rating: 4.9,
    price: 350,
  },
  {
    id: 2,
    image: "https://i.imgur.com/4bbn84w.jpg",
    category: "Development",
    title: "FullStack Web Development Course",
    instructor: "Dan Abramov",
    rating: 4.8,
    price: 450,
  },
  {
    id: 3,
    image: "https://i.imgur.com/LKJKwif.jpg",
    category: "Design",
    title: "Live Training with Jessica",
    instructor: "Jessica Walsh",
    rating: 4.9,
    price: 999,
  },
  {
    id: 4,
    image: "https://i.imgur.com/K9oS0um.jpg",
    category: "AI",
    title: "AI Development With Python",
    instructor: "Andrew Ng",
    rating: 4.9,
    price: 499,
  },
  {
    id: 5,
    image: "https://i.imgur.com/IK4Y4HF.jpg",
    category: "Design",
    title: "Basic of Art and Design",
    instructor: "Debbie Millman ",
    rating: 4.9,
    price: 420,
  },
  {
    id: 6,
    image: "https://i.imgur.com/MHvDUeA.jpg",
    category: "Business",
    title: "Digital Marketing for PRO",
    instructor: "David K. Williams",
    rating: 4.9,
    price: 1200,
  },
  {
    id: 7,
    image: "https://i.imgur.com/MHvDUeA.jpg",
    category: "Self Care",
    title: "Build Your Perfect Routine",
    instructor: "Tim Ferriss",
    rating: 4.9,
    price: 350,
  },
  {
    id: 8,
    image: "https://i.imgur.com/4bbn84w.jpg",
    category: "Business",
    title: "Practicale Sales Training",
    instructor: "David K. Williams",
    rating: 4.9,
    price: 1999,
  },
  {
    id: 9,
    image: "https://i.imgur.com/LKJKwif.jpg",
    category: "Business",
    title: "Why AI in Business",
    instructor: "Yasmin Green",
    rating: 4.7,
    price: 499,
  },
  {
    id: 10,
    image: "https://i.imgur.com/IK4Y4HF.jpg",
    category: "Design",
    title: "Learn Branding And Design",
    instructor: "Jessica Walsh",
    rating: 4.9,
    price: 499,
  },
  {
    id: 11,
    image: "https://i.imgur.com/K9oS0um.jpg",
    category: "Data science",
    title: "Advance Data Structure and Algorithms",
    instructor: "Mariya Zhelyazkova",
    rating: 4.9,
    price: 285,
  },
  {
    id: 12,
    image: "https://i.imgur.com/MHvDUeA.jpg",
    category: "Design",
    title: "Complete Blender: Learn 3D Modeling",
    instructor: "Chris Do",
    rating: 4.9,
    price: 950,
  },
  {
    id: 13,
    image: "https://i.imgur.com/MHvDUeA.jpg",
    category: "Self Care",
    title: "Happiness and life satisfaction",
    instructor: "Daniel Kahneman ",
    rating: 4.9,
    price: 399,
  },
  {
    id: 14,
    image: "https://i.imgur.com/MHvDUeA.jpg",
    category: "Business",
    title: "Learn Leardership with Simon",
    instructor: "Simon Sinek",
    rating: 4.9,
    price: 650,
  },
  {
    id: 15,
    image: "https://i.imgur.com/whUHoa5.jpg",
    category: "Data Sceience",
    title: "The Complete Machine Learning and Data Science",
    instructor: "Mariya Zhelyazkova ",
    rating: 4.9,
    price: 150,
  },
];

export const accordions = [
  {
    id: 1,
    question: "What is Courshare?",
    answer:
      "Courshare is an online course website that provides a platform for individuals and organizations to create, share, and sell online courses. ",
  },
  {
    id: 2,
    question: "What can I learn from Courshare?",
    answer:
      "Courshare offers a range of tools and resources for instructors to deliver engaging and effective education, and for students to access high-quality learning materials and resources. Courshare aims to make it easy for anyone to share their expertise and knowledge with the world, and to provide learners with convenient and flexible education opportunities.",
  },
  {
    id: 3,
    question: "Can I teach on Courshare?",
    answer:
      "Yes, you can teach on Courshare. The platform provides instructors with the tools and resources they need to create and deliver online courses, including multimedia tools, automated grading and feedback, and 24/7 support. If you're an expert in your field and passionate about teaching others, then Courshare is an excellent opportunity for you to share your knowledge and skills with a global audience.",
  },
  {
    id: 4,
    question: "What is included in my Courshare membership?",
    answer:
      "With a Courshare membership, you will have access to all premium courses on the platform. In addition to this, you may also be entitled to other benefits, such as: Interactive quizzes and assessments, Engaging multimedia content, 24/7 technical support, Certificate of completion for each course you complete. Please note that the exact benefits included with a Courshare membership may vary, and it is always best to consult the Courshare website or contact them directly for the most up-to-date and accurate information.",
  },
];
