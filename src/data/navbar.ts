import { CONTACT_SECTION_ID } from "@/views/HomeView/components/ContactSection";
import { PROJECTS_SECTION_ID } from "@/views/HomeView/components/ProjectsSection";
import { SERVICES_SECTION_ID } from "@/views/HomeView/components/ServicesSection";
import { SKILLS_SECTION_ID } from "@/views/HomeView/components/SkillsSection";
import { CORE_TECH_SECTION_ID } from "@/views/HomeView/components/CoreTechSection";

type NavSection = {
  name: string;
  id?: string;
  route?: string;
};

export const NAV_SECTIONS: NavSection[] = [
  {
    id: CORE_TECH_SECTION_ID,
    name: "Core Tech",
  },
  {
    id: SKILLS_SECTION_ID,
    name: "Skills",
  },
  {
    id: SERVICES_SECTION_ID,
    name: "Services",
  },
  {
    id: PROJECTS_SECTION_ID,
    name: "Projects",
  },
  {
    id: CONTACT_SECTION_ID,
    name: "Contact",
  },
  {
    route: "/resume",
    name: "Resume",
  },
];
