import Camp from "@/components/Camp/Camp";
import Features from "@/components/Feautres/Features";
import GetApp from "@/components/GetApp/GetApp";
import Guide from "@/components/Guide/Guide";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
