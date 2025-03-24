import HomePageButton from "@/components/ui/HomePageButton";
import ThemeButton from "@/components/ui/ThemeButton";

export default function FloatingButtonsContainer(props: {
  children: React.ReactNode;
}) {
  const { children } = props;

  return (
    <div className="relative">
      <nav className="absolute top-[-2.5rem] left-0 right-0 flex justify-between px-5">
        <HomePageButton />
        <ThemeButton />
      </nav>
      {children}
    </div>
  );
}
