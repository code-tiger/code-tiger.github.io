import BaseLayout from "@/components/layout/BaseLayout";
import Footer from "@/components/layout/Footer";
import FloatingButtonsContainer from "@/components/layout/FloatingButtonsContainer";

import "@/styles/globals.css";
import "@/views/HomeView/HomeView.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout className="relative" footer={<Footer />}>
      <FloatingButtonsContainer>{children}</FloatingButtonsContainer>
    </BaseLayout>
  );
}
