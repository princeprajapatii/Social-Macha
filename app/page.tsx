import Hero from "@/components/Hero";
import Image from "next/image";
import KeyFeatures from "@/components/KeyFeatures";
import GrowthSection from "@/components/GrowthSection"
import BrandStrip from "@/components/BrandStrip";
import AboutHighlights from "@/components/AboutHighlights";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero/>
      <KeyFeatures/>
      <GrowthSection/>
      <BrandStrip/>
      <AboutHighlights/>
      <FinalCTA/>
    </div>
  );
}
