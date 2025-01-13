import { Inter, Sora } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
});

export const metadata = {
  title: "hlasovyrobot.cz - Inteligentní Voiceboti pro vaše podnikání",
  description: "Tvoříme Voiceboty, kteří pracují 24/7, rozumí volajícím a řeší jejich problémy autonomně a bez čekání.",
  keywords: ["voicebot", "hlasový robot", "umělá inteligence", "AI asistent", "automatizace hovorů", "zákaznický servis"],
  authors: [{ name: "GM MEDIA" }],
  creator: "GM MEDIA",
  publisher: "GM MEDIA",
  robots: "index, follow",
  alternates: {
    canonical: "https://hlasovyrobot.cz",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://hlasovyrobot.cz",
    title: "hlasovyrobot.cz - Inteligentní Voiceboti pro vaše podnikání",
    description: "Tvoříme Voiceboty, kteří pracují 24/7, rozumí volajícím a řeší jejich problémy autonomně a bez čekání.",
    siteName: "hlasovyrobot.cz",
  },
  twitter: {
    card: "summary_large_image",
    title: "hlasovyrobot.cz - Inteligentní Voiceboti",
    description: "Tvoříme Voiceboty, kteří pracují 24/7, rozumí volajícím a řeší jejich problémy autonomně a bez čekání.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "verification_code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={cn(inter.variable, sora.variable)}>
      <head>
        <StructuredData />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Navbar />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-200 to-blue-100 -z-10" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
