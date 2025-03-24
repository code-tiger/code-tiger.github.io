import BaseLayout from "@/components/layout/BaseLayout";
import Footer from "@/components/layout/Footer";
import { createMetadata } from "@/utils/metadata";

import "@/styles/globals.css";
import "@/views/HomeView/HomeView.css";

export const metadata = createMetadata({
  title: "Flutter Demo",
  description: "A demonstration of Flutter's web support capabilities...",
  pathname: "/flutter-demo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout footer={<Footer />}>{children}</BaseLayout>;
}
