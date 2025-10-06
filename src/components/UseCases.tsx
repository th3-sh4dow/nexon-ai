import { Card } from "@/components/ui/card";
import { Sunrise, Music, Briefcase, Moon } from "lucide-react";

const useCases = [
  {
    icon: Sunrise,
    title: "Morning Routine",
    command: '"NEXON, set up my morning routine"',
    actions: [
      "Adjusts brightness to 80%",
      "Sets volume to 60%",
      "Opens Chrome & Spotify",
      "Checks weather forecast",
    ],
    gradient: "from-orange-400 to-yellow-500",
    bgGradient: "from-orange-500/10 to-yellow-500/5",
  },
  {
    icon: Music,
    title: "Entertainment Control",
    command: '"Play my favorite playlist and dim the lights"',
    actions: [
      "Opens Spotify instantly",
      "Plays your saved music",
      "Adjusts screen brightness",
      "Creates perfect ambiance",
    ],
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/5",
  },
  {
    icon: Briefcase,
    title: "Work Productivity",
    command: '"Prepare my workspace for coding"',
    actions: [
      "Opens development tools",
      "Optimizes system settings",
      "Provides system status",
      "Reduces distractions",
    ],
    gradient: "from-cyan-400 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/5",
  },
  {
    icon: Moon,
    title: "Evening Wind-Down",
    command: '"Get ready for sleep mode"',
    actions: [
      "Reduces screen brightness",
      "Closes unnecessary apps",
      "Prepares system for rest",
      "Sets do-not-disturb mode",
    ],
    gradient: "from-indigo-400 to-purple-600",
    bgGradient: "from-indigo-500/10 to-purple-500/5",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Daily Scenarios
            <span className="text-gradient"> Made Effortless</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how NEXON AI seamlessly integrates into your daily routine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className={`group relative p-8 bg-gradient-to-br ${useCase.bgGradient} border-border hover:border-primary/50 transition-all duration-300 overflow-hidden`}
            >
              {/* Icon with gradient */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-lg inline-block">
                    {useCase.command}
                  </p>
                </div>
              </div>

              {/* Actions list */}
              <div className="space-y-3 pl-20">
                {useCase.actions.map((action, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
