export function Footer() {
  return (
    <footer className="border-t w-full mt-auto">
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
              <div className="text-sm text-muted-foreground pt-2">
                <p>Email: radek.hrehor@gmmedia.cz</p>
                <p>Tel.: 777 325 590</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold">Sledujte nás</h4>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
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