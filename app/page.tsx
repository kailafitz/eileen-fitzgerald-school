import HomePageAnimation from "@/components/custom/homePageAnimation";
import Intro from "@/components/custom/intro";
import Name from "@/components/custom/name";

export default function Home() {
  return (
    <>
      <HomePageAnimation />
      <div id="home-content" className="overflow-hidden">
        <Name />
        <Intro />
      </div>
    </>
  );
}
