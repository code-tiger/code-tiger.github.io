import {
  FaMobileAlt,
  FaComments,
  FaChalkboardTeacher,
  FaPlug,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";
import { Service } from "@/types/shared";

const SERVICES: Service[] = [
  {
    icon: FaMobileAlt,
    title: "Mobile Applications",
    description:
      "Building efficient apps for multiple platforms using Flutter frameworks.",
  },
  {
    icon: FaLaptopCode,
    title: "Web Applications",
    description:
      "Creating modern, responsive web applications using React and Next.js with focus on performance and user experience.",
  },
  {
    icon: FaComments,
    title: "Consultation",
    description:
      "A dedicated session to provide expert advice on optimizing software development strategy and technology choices.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Training and Workshops",
    description:
      "Providing training sessions and hands-on workshops to upskill teams in mobile development or technology best practices.",
  },
  {
    icon: FaPlug,
    title: "Integrations",
    description:
      "Seamlessly connecting frontend apps with third-party services, APIs, and backend systems.",
  },
  {
    icon: FaChartLine,
    title: "Analytics",
    description:
      "Implementing robust analytics to track user behavior and improve app performance.",
  },
];

export default SERVICES;
