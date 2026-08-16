import Hero from "@/components/Hero/Hero";
import Introduction from "@/components/About/Introduction";
import Services from "@/components/Services/Services";
import Technology from "@/components/Technology/Technology";

import Portfolio from "@/components/Portfolio/Portfolio";
import Process from "@/components/Process/Process";
import WhyKshirsagar from "@/components/WhyKshirsagar/WhyKshirsagar";
import CTA from "@/components/Footer/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Hero />
      <Introduction />
      <Services />
      <Technology />

      <Portfolio />
      <Process />
      <WhyKshirsagar />
      <CTA />
      <Footer />
    </main>
  );
}
