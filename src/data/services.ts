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
    Icon: FaMobileAlt,
    title: "Mobile Applications",
    description:
      "Building efficient apps for multiple platforms using Flutter frameworks.",
    colorHex: "#3b82f6",
  },
  {
    Icon: FaLaptopCode,
    title: "Web Applications",
    description:
      "Creating modern, responsive web applications using React and Next.js with focus on performance and user experience.",
    colorHex: "#10b981",
  },
  {
    Icon: FaComments,
    title: "Consultation",
    description:
      "A dedicated session to provide expert advice on optimizing software development strategy and technology choices.",
    colorHex: "#f59e0b",
  },
  {
    Icon: FaChalkboardTeacher,
    title: "Training and Workshops",
    description:
      "Providing training sessions and hands-on workshops to upskill teams in mobile development or technology best practices.",
    colorHex: "#ef4444",
  },
  {
    Icon: FaPlug,
    title: "Integrations",
    description:
      "Seamlessly connecting frontend apps with third-party services, APIs, and backend systems.",
    colorHex: "#8b5cf6",
  },
  {
    Icon: FaChartLine,
    title: "Analytics",
    description:
      "Implementing robust analytics to track user behavior and improve app performance.",
    colorHex: "#6366f1",
  },
];

export default SERVICES;
