"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Satellite, Shield, Atom, Radio, Sun, Car, Cog } from "lucide-react";

const industries = [
  {
    number: "01",
    icon: Zap,
    title: "Smart Grid / Microgrid",
    description: "Next-generation energy distribution systems for utilities and municipalities.",
    href: "/industries#smart-grid",
    color: "from-blue-500/20 to-primary/10",
    iconColor: "text-primary",
  },
  {
    number: "02",
    icon: Satellite,
    title: "Space & Aerospace",
    description: "High-reliability power electronics for aerospace and satellite systems.",
    href: "/industries#space",
    color: "from-purple-500/20 to-indigo-500/10",
    iconColor: "text-purple-500",
  },
  {
    number: "03",
    icon: Shield,
    title: "Defence & EW",
    description: "Mission-critical tactical power for defence electronics warfare systems.",
    href: "/industries#defense",
    color: "from-slate-500/20 to-slate-600/10",
    iconColor: "text-slate-600",
  },
  {
    number: "04",
    icon: Atom,
    title: "Nuclear Power",
    description: "Fail-safe, certified power solutions for nuclear facility infrastructure.",
    href: "/industries#nuclear",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    number: "05",
    icon: Radio,
    title: "Telecom Tower",
    description: "Uninterrupted power for 4G/5G base stations and tower infrastructure.",
    href: "/industries#telecom",
    color: "from-orange-500/20 to-amber-500/10",
    iconColor: "text-[#F26522]",
  },
  {
    number: "06",
    icon: Sun,
    title: "Solar & Renewable",
    description: "MPPT chargers, solar inverters, and hybrid microgrid integration.",
    href: "/industries#solar",
    color: "from-yellow-500/20 to-orange-500/10",
    iconColor: "text-yellow-600",
  },
  {
    number: "07",
    icon: Car,
    title: "EV Infrastructure",
    description: "Two-wheeler to heavy-vehicle fast EV charging stations and networks.",
    href: "/industries#ev",
    color: "from-cyan-500/20 to-sky-500/10",
    iconColor: "text-cyan-600",
  },
  {
    number: "08",
    icon: Cog,
    title: "Industrial Automation",
    description: "Robust power systems for automated manufacturing and industrial control.",
    href: "/industries#automation",
    color: "from-red-500/20 to-rose-500/10",
    iconColor: "text-rose-600",
  },
];

export function Industries() {
  return (
    <section className="py-24 md:py-32 bg-[#0A1128] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative mx-auto px-4 lg:px-8 max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 font-bold text-sm mb-6"
            >
              Domain Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]"
            >
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#60A5FA]">Power</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/industries"
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors group"
            >
              View All Industries <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Link
                href={industry.href}
                className={`group relative flex flex-col h-full p-6 rounded-2xl bg-gradient-to-br ${industry.color} border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
              >
                {/* Number */}
                <span className="text-xs font-black text-white/20 tracking-widest mb-4 group-hover:text-white/40 transition-colors">
                  {industry.number}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className={`w-6 h-6 ${industry.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">
                  {industry.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1 mt-4 text-xs font-bold text-slate-500 group-hover:text-white transition-colors">
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
