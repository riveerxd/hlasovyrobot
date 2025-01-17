"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

interface ContactMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactMenu({ isOpen, onClose }: ContactMenuProps) {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={onClose}
          />
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div 
              className="relative w-full max-w-lg mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-2xl border bg-card p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 z-10" />
                <div className="relative z-20 space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-bold">Kontaktujte nás</h2>
                      <p className="text-muted-foreground">Jsme tu pro vás</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                      onClick={onClose}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Phone number - primary focus */}
                  <motion.a
                    href="tel:+420777325590"
                    className="block"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="group relative overflow-hidden rounded-xl bg-primary p-6 transition-colors hover:bg-primary/90">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      <div className="relative flex items-center gap-4">
                        <div className="rounded-full bg-white/20 p-3">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary-foreground/80">Zavolejte nám</p>
                          <p className="text-xl font-bold text-primary-foreground">+420 777 325 590</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>

                  {/* Email - secondary focus */}
                  <motion.a
                    href="mailto:radek.hrehor@gmmedia.cz"
                    className="block"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="group relative overflow-hidden rounded-xl border bg-card/50 p-4 transition-colors hover:bg-accent">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Email</p>
                          <p className="text-base font-medium">radek.hrehor@gmmedia.cz</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 