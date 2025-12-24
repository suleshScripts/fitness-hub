import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import Facilities from "@/components/sections/Facilities";
import Programs from "@/components/sections/Programs";
import Trainers from "@/components/sections/Trainers";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <Facilities />
        <Programs />
        <Trainers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
