import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import TechSpecs from "@/components/TechSpecs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <UseCases />
        <TechSpecs />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
