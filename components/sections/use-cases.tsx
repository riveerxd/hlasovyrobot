"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Sparkles, InfoIcon, Phone, Calendar, Headset, ArrowUpDown, InfinityIcon, Infinity, Building2 } from "lucide-react";

const useCases = [
    {
        text: "Prodej",
        description: "Automatizace prodeje pro růst obratu a zvýšení efektivity.",
        icon: ShoppingCart,
        stat: "95%",
        statLabel: "Úspěšnost"
    },
    {
        text: "Zákaznická podpora",
        description: "Rychlé odpovědi a okamžité řešení problémů.",
        icon: Headset,
        stat: "90%",
        statLabel: "Úspěšnost odpovědí"
    },
    {
        text: "Telefonické kampaně",
        description: "Automatizace kampaní a oslovení zákazníků s nabídkami.",
        icon: Phone,
        stat: "100%",
        statLabel: "Pokrytí"
    },
    {
        text: "Informační portál",
        description: "Okamžité odpovědi na vše – od A do Z.",
        icon: InfoIcon,
        stat: <Infinity size={30} />,
        statLabel: "Informací"
    },

    {
        text: "Správa rezervací",
        description: "Úpravy a zrušení termínů pomocí hlasových příkazů.",
        icon: Calendar,
        stat: "95%",
        statLabel: "Úspěšnost změn"
    },
    {
        text: "Virtuální recepce",
        description: "Profesionální přístup k vašim klientům.",
        icon: Building2,
        stat: "24/7",
        statLabel: "Dostupnost"
    },
    
];

export function UseCases() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="use-cases" className="relative w-full py-24 md:py-32 overflow-hidden">
            <div className="container relative max-w-5xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-16"
                >
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mx-auto">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">Využití</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Příklady využití hlasového robota</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Virtuální asistent se skvěle hodí tam, kde potřebujete být stále k dispozici a poskytovat zákazníkům
                            profesionální podporu 24/7.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={useCase.text}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="relative group h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative h-full p-8 rounded-2xl border bg-card/50 backdrop-blur-sm space-y-6">
                                    {/* Icon Section */}
                                    <div className="flex items-center">
                                        <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                                            <useCase.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="flex flex-col ml-3">
                                            <span className="text-2xl font-bold text-primary">{useCase.stat}</span>
                                            <span className="text-sm text-muted-foreground">{useCase.statLabel}</span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            {useCase.text}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {useCase.description}
                                        </p>
                                    </div>

                                    {/* Decorative Element */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 