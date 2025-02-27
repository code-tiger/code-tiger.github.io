import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BaseLayout from "@/components/layout/BaseLayout";

import "@/styles/globals.css";
import "@/views/HomeView/HomeView.css";

export const metadata: Metadata = {
  title: "Home | Yeh Hsuan Ting",
  description:
    "I am a software developer who is passionate about building great products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout header={<Navbar />} footer={<Footer />}>
      {children}
    </BaseLayout>
  );
}
