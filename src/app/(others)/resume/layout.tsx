import { createMetadata } from "@/utils/metadata";

import "@/views/ResumeView/ResumeView.css";

export const metadata = createMetadata({
  title: "Resume",
  description: "Professional resume of Yeh Hsuan Ting",
  pathname: "/resume",
});

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
