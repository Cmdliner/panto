import BestSelling from "@/components/BestSelling";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero section with dark overlay */}
      <div className="relative bg-[url('/assets/bg-hero.png')] bg-cover bg-bottom bg-no-repeat min-h-screen">
        <div className="absolute inset-0 bg-[#5554541c] bg-opacity-80"></div>
        <div className="relative z-10 p-8">
          <Header />
          <Hero />
        </div>
      </div>

      <WhyUs />
      <BestSelling />
      <Experiences />
      <Materials />
    </main>
  );
}
