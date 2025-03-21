import Image from "next/image";
import { NavMiddle } from "@/components/nav/middle";
import HeroSection from "@/components/hero-section";
import WhyUsSection from "@/components/why-us-section";
import ServicesSection from "@/components/services-section";
import WhoWeAreSection from "@/components/who-we-are-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div>
      <NavMiddle />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <WhoWeAreSection />
      <FooterSection />
    </div>
  );
}
