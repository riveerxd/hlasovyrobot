"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { ContactMenu } from "./contact-menu";
import Image from "next/image";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const menuItems = [
    { label: "Ukázky", to: "samples" },
    { label: "Funkce", to: "features" },
    { label: "Využití", to: "use-cases" },
    { label: "Postup", to: "process" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 z-50"
      >
        <div className="container max-w-[90rem] mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-100}
            className="text-2xl font-bold cursor-pointer hover:text-primary transition-colors flex flex-col items-center gap-2 mt-3 font-heading"
          >
            HlasovyRobot.cz
            <div className="flex flex-row items-center -mt-5 gap-2 pl-16">
              <a className="text-sm text-muted-foreground font-sans">powered by</a>
              <Image src="/images/vocalls-logo.svg" alt="Vocalls Logo" className="w-[4rem] h-10" width={64} height={40}/>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              ))}
              <Button 
                onClick={() => setIsContactOpen(true)}
                className="gap-2 group"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Kontaktujte nás
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0
          }}
          className="md:hidden border-t bg-background overflow-hidden"
        >
          <div className="container max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors px-2 py-1.5 rounded-lg hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="gap-2 group w-full"
              onClick={() => {
                setIsContactOpen(true);
                setIsMenuOpen(false);
              }}
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Kontaktujte nás
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      <ContactMenu 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
} 