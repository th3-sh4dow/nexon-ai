import { Card } from "@/components/ui/card";
import { Cpu, Zap, Shield, Code, CheckCircle2 } from "lucide-react";

const techHighlights = [
  {
    icon: Cpu,
    title: "Cutting-Edge AI",
    description: "Powered by Google Gemini 2.0 Flash with LangChain integration for advanced reasoning",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "LiveKit integration ensures instant voice recognition and response",
    color: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All data stored locally - your conversations never leave your computer",
    color: "text-purple-400",
  },
  {
    icon: Code,
    title: "Professional Grade",
    description: "Built with PyQt5, featuring modern UI and enterprise-level error handling",
    color: "text-pink-400",
  },
];

const requirements = [
  "Windows 10/11 (64-bit)",
  "4GB RAM minimum (8GB recommended)",
  "500MB storage space",
  "Microphone for voice input",
  "Internet connection for AI features",
];

const advantages = [
  { text: "Unlike Cortana", point: "Actually works reliably and understands context" },
  { text: "Unlike Siri", point: "Designed specifically for Windows with deep system integration" },
  { text: "Unlike Alexa", point: "Focused on productivity, not shopping" },
  { text: "Unlike Google Assistant", point: "Remembers everything and learns your preferences" },
];

const TechSpecs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="container px-4 relative">
        {/* Tech Highlights */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical Excellence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techHighlights.map((tech, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <tech.icon className={`w-10 h-10 mb-4 ${tech.color} group-hover:scale-110 transition-transform`} />
                <h3 className="font-semibold mb-2 text-foreground">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-gradient">NEXON AI</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-primary mb-1">{adv.text}</p>
                    <p className="text-muted-foreground">{adv.point}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card/80 backdrop-blur border-primary/30 shadow-[0_0_30px_hsl(189_94%_60%_/_0.15)]">
            <h3 className="text-2xl font-bold mb-6 text-center">System Requirements</h3>
            <div className="space-y-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Supported Languages:</span>
                <span className="font-semibold text-foreground">English • Hindi</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
