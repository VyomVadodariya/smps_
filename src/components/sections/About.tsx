"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Calendar, Users, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const highlights = [
  { icon: Calendar, label: "Established", value: "2021" },
  { icon: MapPin, label: "Headquarters", value: "Odisha, India" },
  { icon: Users, label: "Team Size", value: "50+ Engineers" },
  { icon: Award, label: "Certifications", value: "ISO 9001 & 14001" },
];

export function About() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bess/3.jpg"
                alt="SMPS Manufacturing Facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128]/40 to-transparent" />
            </div>

            {/* Floating secondary image */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-48 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            >
              <Image
                src="/images/bess/BMS.jpg"
                alt="BMS Control Unit"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Founded badge */}
            <div className="absolute top-6 -left-4 bg-[#F26522] text-white px-5 py-3 rounded-xl shadow-lg hidden md:block">
              <p className="text-xs font-bold uppercase tracking-wider">Est.</p>
              <p className="text-2xl font-black leading-none">2021</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
            >
              About SMPS Electric
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-[1.1]">
              Powering the Future of<br />
              <span className="text-primary">Critical Infrastructure</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
              SMPS Electric Control Private Limited is an eastern India-based deep-tech startup that delivers next-generation technological products for the world&apos;s most critical infrastructure. We specialize in patented Smart Hybrid SMPS, Battery Energy Storage Systems (BESS), and turnkey EPC solutions.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Driven by a team of research scholars from IITs and NITs, we operate two state-of-the-art Smart Integrated Power Electronics Manufacturing Hubs — in Odisha and Chennai — delivering solutions for Defense, Telecom, Nuclear, Space, and Renewable Energy sectors.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3 p-4 bg-muted rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <h.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{h.label}</p>
                    <p className="font-bold text-foreground">{h.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className={cn(buttonVariants({ size: "lg" }), "rounded-xl font-bold px-8 group")}
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
