import HeroSection from "@/components/Homepage/HeroSection";
import ServiceSection from "@/components/Homepage/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
    </div>
  );
}
