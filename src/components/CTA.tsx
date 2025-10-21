import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      
      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-sm font-medium text-primary">Free Trial Available</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Transform
            <br />
            <span className="text-gradient">Your Computer?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download NEXON AI and experience the magic of voice-controlled computing. 
            No registration, no credit card, just pure AI power.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" className="group">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Free Trial
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { label: "Instant Access", value: "No Setup" },
              { label: "No Registration", value: "Required" },
              { label: "Voice Control", value: "Ready" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
