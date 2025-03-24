import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Flutter Demo",
  description: "A demonstration of Flutter's web support capabilities...",
  pathname: "/flutter-demo",
});

export default function FlutterDemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
