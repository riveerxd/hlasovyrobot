"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Ukázky", to: "samples" },
    { label: "Funkce", to: "features" },
    { label: "Postup", to: "process" },
  ];

  const handleContactClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container max-w-[90rem] mx-auto px-4 flex h-16 items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-100}
          className="text-xl font-bold cursor-pointer"
        >
          hlasovyrobot.cz
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
          <Button onClick={handleContactClick}>Kontaktujte nás</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full" onClick={() => {
              handleContactClick();
              setIsMenuOpen(false);
            }}>
              Kontaktujte nás
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
} 