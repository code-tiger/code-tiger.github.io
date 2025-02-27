import type { Metadata } from "next";

import BaseLayout from "@/components/layout/BaseLayout";
import Footer from "@/components/layout/Footer";

import "@/styles/globals.css";
import "@/views/HomeView/HomeView.css";

export const metadata: Metadata = {
  title: "Flutter Demo | Yeh Hsuan Ting",
  description:
    "A demonstration of Flutter's web support capabilities. See for yourself how Flutter can be used to build a web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout footer={<Footer />}>{children}</BaseLayout>;
}
