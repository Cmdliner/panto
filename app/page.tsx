import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      {/* Hero section with dark overlay */}
      <div className="relative bg-[url('/assets/bg-hero.png')] bg-cover bg-bottom bg-no-repeat h-screen">
        <div className="absolute inset-0 bg-[#00000042] bg-opacity-60"></div>
        <div className="relative z-10 p-8">
          <Header />
          <Hero />
        </div>
      </div>
      {/* Why Choosing Us */}
      <WhyUs />
    </main>
  );
}
