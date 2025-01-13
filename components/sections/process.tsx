import { CalendarDays, MessageSquare, Plug, TestTube2, PlayCircle } from "lucide-react";

const steps = [
  {
    title: "Úvodní setkání",
    subtitle: "Bereme to osobně",
    description: "Seznámení se s potřebami klienta, představení funkcí robota, příprava cenové nabídky a naplánování následné spolupráce.",
    icon: CalendarDays
  },
  {
    title: "Návrh scénáře",
    subtitle: "Jak to bude celé fungovat ?",
    description: "Definice funkcí voicebota, příprava volacích scénářů v systému, návrh napojení na API, či jiné datové zdroje.",
    icon: MessageSquare
  },
  {
    title: "Integrace robota",
    subtitle: "Napojení na systémy",
    description: "Propojení s ústřednou, implementace připojení na firemní systémy (CRM, e-shop, ... ).",
    icon: Plug
  },
  {
    title: "Testování a schválení",
    subtitle: "Dvakrát měř, jednou řež",
    description: "Testování jednotlivých funkcí robota, definice ideální cesty robota hovorem, finální nastavení služby a schválení projektu zadavatelem.",
    icon: TestTube2
  },
  {
    title: "Uvedení do provozu",
    subtitle: "Voicebot může začít!",
    description: "Voicebot je uveden do provozu - dostupný na požadované lince nebo telefonuje na zvolené kontakty dle vytvořené kampaně.",
    icon: PlayCircle
  }
];

export function Process() {
  return (
    <section id="process" className="relative w-full py-24 md:py-32">
      <div className="container relative max-w-5xl mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Postup spolupráce</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-px hidden sm:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.title} className={`relative flex flex-col sm:flex-row gap-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 sm:w-1/2">
                    <div className="p-6 rounded-lg border bg-card relative">
                      <div className="absolute left-0 top-1/2 -translate-x-[calc(24px+1.5rem)] -translate-y-1/2 hidden sm:block">
                        <div className="w-12 h-12 rounded-full border-4 border-background bg-card flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex sm:hidden items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="hidden sm:block">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="font-medium text-primary">{step.subtitle}</p>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 