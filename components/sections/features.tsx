import { Phone, Clock, Languages, ArrowRightLeft, Database, HeadphonesIcon, HeadsetIcon } from "lucide-react";

const features = [
  {
    title: "Hromadné volání",
    description: "Uskuteční tisíce hovorů během pár minut. Šetří tím váš čas i peníze. Zvyšuje efektivitu podnikání.",
    details: "Voicebot zavolá zákazníkovi, předá potřebné informace a získá od něj zpětnou vazbu.",
    icon: Phone
  },
  {
    title: "Nepřetržitý provoz",
    description: "Pracuje 24/7. Rozumí problému zákazníka, vyřeší ho, nebo ho přepojí na živého operátora.",
    details: "Voicebot umí přijímat více hovorů najednou a ihned je vyřídit. Takže se nikdy nestane, že budete mít obsazeno.",
    icon: Clock
  },
  {
    title: "Inteligentní přepojování",
    description: "Voicebot v případě potřeby rozpozná dotaz a přepojí volajícího na živého operátora.",
    details: "Na operátora jsou z pravidla směrovány jen velmi složité dotazy, které Voicebot zatím nedokáže vyřešit.",
    icon: ArrowRightLeft
  },
  {
    title: "Vícejazyčnost",
    description: "Český, slovenský, anglický, německý či ukrajinský jazyk není problém.",
    details: "Na začátku telefonátu Voicebot nasměruje volajícího na správnou jazykovou verzi. Vše probíhá automaticky.",
    icon: Languages
  },
  {
    title: "Datová integrace",
    description: "Při hovoru dokáže využít informace o volajícím. Autonomně směřuje hovor dle nastavení v systému.",
    details: "Real-time datová komunikace s Vaším CRM systémem.",
    icon: Database
  }
];

const useCases = [
  {
    text: "Podpora prodeje",
    rotation: 0
  },
  {
    text: "Virtuální recepce",
    rotation: 72
  },
  {
    text: "Pracuje 24/7",
    rotation: 144
  },
  {
    text: "Dotazy na zpětnou vazbu",
    rotation: 216
  },
  {
    text: "Virtuální asistentka",
    rotation: 288
  }
];

export function Features() {
  return (
    <section id="features" className="relative w-full py-24 md:py-32">
      <div className="container relative max-w-5xl mx-auto px-4">
        <div className="space-y-16">
          {/* Main Features */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trochu podrobněji</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="relative p-6 rounded-lg border bg-card">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                    <p className="text-sm text-muted-foreground">{feature.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Příklady využití Voicebota</h3>
              <p className="text-muted-foreground">
                Virtuálního asistenta využijete všude, kde chcete být neustále online
              </p>
            </div>

            <div className="relative w-[300px] h-[300px] mx-auto md:w-[400px] md:h-[400px]">
              {/* Center Circle */}
              <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <HeadsetIcon className="w-12 h-12 text-primary" />
              </div>
              
              {/* Orbiting Items */}
              {useCases.map((useCase) => (
                <div
                  key={useCase.text}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${useCase.rotation}deg)
                      translateX(140px)
                      rotate(-${useCase.rotation}deg)
                    `
                  }}
                >
                  <div className="p-4 rounded-full border bg-card shadow-lg hover:scale-110 transition-transform">
                    <p className="text-sm font-medium whitespace-nowrap">{useCase.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 