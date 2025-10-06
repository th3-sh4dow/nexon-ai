import { Mic, Brain, Zap, Globe, Settings, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "Voice Control Everything",
    description: "Just speak naturally - control your computer, apps, and settings with simple voice commands in English or Hindi",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Remembers Everything",
    description: "NEXON learns your preferences, remembers conversations, and adapts to your usage patterns like a real assistant",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Instant Automation",
    description: "Automate complex tasks with simple commands - adjust brightness, control volume, open apps, search the web",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Smart Integration",
    description: "Seamlessly integrates with Windows, Chrome, Spotify, and your favorite applications",
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: Settings,
    title: "System Optimization",
    description: "Real-time system monitoring with intelligent suggestions for better performance",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Personal Insights",
    description: "Analyzes your usage patterns and provides personalized recommendations to boost productivity",
    gradient: "from-orange-500 to-cyan-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful Features for
            <span className="text-gradient"> Modern Computing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of human-computer interaction with NEXON AI's comprehensive suite of intelligent capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(189_94%_60%_/_0.2)] overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-primary to-transparent" />
              
              <div className="relative space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
