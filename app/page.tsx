import HomePageAnimation from "@/components/custom/homePageAnimation";
import Intro from "@/components/custom/intro";
import Name from "@/components/custom/name";

export default function Home() {
  return (
    <>
      <HomePageAnimation />
      <div className="animate-home-page z-70">
        <Name />
        <Intro />
      </div>
    </>
  );
}
