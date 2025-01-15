export function Footer() {
  return (
    <footer className="border-t w-full mt-auto bg-white/[0.4]">
      <div className="container max-w-[90rem] mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">hlasovyrobot.cz</h3>
            <p className="text-sm text-muted-foreground">
              Tvoříme inteligentní Voiceboty pro efektivní komunikaci s vašimi zákazníky.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Kontakt</h4>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">GM MEDIA, s.r.o</p>
                <p>Londýnská 254/7</p>
                <p>120 00 Praha 2</p>
              </div>
              
            </div>
          </div>
          
           <div className="space-y-3">
            <h4 className="text-sm font-semibold">Máte dotazy? Ozvěte se nám!</h4>
              <div className="text-sm text-muted-foreground pt-2">
                <a href="mailto:radek.hrehor@gmmedia.cz">Email: <span className="text-primary underline">radek.hrehor@gmmedia.cz</span></a>
                <br />
                <a href="tel:+420777325590">Tel.: <span className="text-primary underline">777 325 590</span> </a>
            </div>
          </div>
          
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} hlasovyrobot.cz. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
} 