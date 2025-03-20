import Image from "next/image";
import { NavMiddle } from "@/components/nav/middle";
import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-section";
import FeaturesSection from "@/components/features-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div>
      <NavMiddle />
      <FeaturesSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
}
