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
    to: "instrutors",
    name: "Instrutors",
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

export const courses = [
  {
    id: 1,
    image: "https://i.imgur.com/whUHoa5.jpg",
    category: "Web Design",
    title: "The Complete Web Design Course",
    rating: 4.9,
    participants: 500,
    price: 150,
  },
  {
    id: 2,
    image: "https://i.imgur.com/4bbn84w.jpg",
    category: "Web Development",
    title: "FullStack Web Development Course",
    rating: 4.8,
    participants: 700,
    price: 250,
  },
  {
    id: 3,
    image: "https://i.imgur.com/LKJKwif.jpg",
    category: "Web Design",
    title: "UI/UX Design Crazy Course With Ania",
    rating: 4.7,
    participants: 600,
    price: 120,
  },
  {
    id: 4,
    image: "https://i.imgur.com/K9oS0um.jpg",
    category: "AI Development",
    title: "AI Development With Python (complete beginner course)",
    rating: 4.9,
    participants: 500,
    price: 285,
  },
  {
    id: 5,
    image: "https://i.imgur.com/IK4Y4HF.jpg",
    category: "SEO",
    title: "The Complete SEO Course",
    rating: 4.9,
    participants: 500,
    price: 49,
  },
  {
    id: 6,
    image: "https://i.imgur.com/MHvDUeA.jpg",
    category: "Marketing",
    title: "Digital Marketing for Beginner",
    rating: 4.9,
    participants: 500,
    price: 450,
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
