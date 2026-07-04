"use client";

import { motion } from "framer-motion";
import { Factory, Cpu, ShieldCheck, Microscope } from "lucide-react";
import Image from "next/image";

export function Capabilities() {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
          <div className="max-w-xl">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-primary mb-4"
            >
              Our Mission
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed font-medium"
            >
              To engineer the world's most dependable power electronics, ensuring zero downtime for mission-critical infrastructure globally.
            </motion.p>
          </div>
          <div className="max-w-xl">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-[#F26522] mb-4"
            >
              Our Vision
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed font-medium"
            >
              To pioneer smart energy ecosystems where industrial automation and quantum-sector deep tech seamlessly integrate with hybrid renewable sources.
            </motion.p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8"
        >
          Our Strength
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 bg-[#0A1128] group border border-white/10"
          >
            <Factory className="w-10 h-10 text-[#F26522] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">ODM Manufacturing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-fledged industrial scale manufacturing hubs equipped with rigorous testing lines.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl p-8 bg-primary group"
          >
            <Cpu className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">Smart Energy</h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Proprietary multi-source converters delivering simultaneous, uninterrupted power dynamically.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl p-8 bg-muted border border-border group hover:border-primary/50 transition-colors"
          >
            <ShieldCheck className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-foreground mb-2">Modern Production</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Engineered for mission-critical operations where failure is simply not an option.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl p-8 bg-muted border border-border group hover:border-primary/50 transition-colors"
          >
            <Microscope className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-foreground mb-2">Engineering R&D</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Driven by research scholars to develop next-gen smart grid and quantum sector electronics.
            </p>
          </motion.div>
        </div>

        {/* Post-About Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 py-8 border-t border-border mt-8">
          <span className="text-sm font-bold text-foreground uppercase tracking-widest bg-muted px-4 py-2 rounded-lg">ISO Certified</span>
          <span className="text-sm font-bold text-foreground uppercase tracking-widest bg-muted px-4 py-2 rounded-lg">OEM Manufacturing</span>
          <span className="text-sm font-bold text-foreground uppercase tracking-widest bg-muted px-4 py-2 rounded-lg">Industrial Electronics</span>
          <span className="text-sm font-bold text-foreground uppercase tracking-widest bg-muted px-4 py-2 rounded-lg">Technical Support</span>
          <span className="text-sm font-bold text-foreground uppercase tracking-widest bg-muted px-4 py-2 rounded-lg">Energy Storage</span>
        </div>
      </div>
    </section>
  );
}
