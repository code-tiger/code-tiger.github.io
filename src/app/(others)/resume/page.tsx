import { createMetadata } from "@/utils/metadata";
import ResumeView from "@/views/ResumeView";

export const metadata = createMetadata({
  title: "Resume",
  description: "Professional resume of Yeh Hsuan Ting",
  pathname: "/resume",
});

export default function Resume() {
  return <ResumeView />;
} 