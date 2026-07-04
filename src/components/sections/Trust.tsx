"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Factory, HardHat } from "lucide-react";

const stats = [
  { value: "5MW+", label: "BESS Capacity Deployed", icon: Zap },
  { value: "2", label: "Smart Manufacturing Hubs", icon: Factory },
  { value: "20+", label: "Patents & Certifications", icon: ShieldCheck },
  { value: "100%", label: "Uptime on Critical Infrastructure", icon: HardHat }
];

export function Trust() {
  return (
    <section className="py-24 bg-white border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Certifications & Trust */}
          <div className="w-full lg:w-1/3">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-black text-foreground tracking-tight mb-6"
            >
              Recognized for <br/> Global Excellence.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed font-medium mb-8"
            >
              SMPS Electric is an ISO 9001:2015 and 14001:2015 certified company, officially registered with Startup India and Startup Odisha.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <div className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-bold text-foreground">
                ISO 9001:2015
              </div>
              <div className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-bold text-foreground">
                ISO 14001:2015
              </div>
              <div className="px-4 py-2 bg-[#F26522]/10 border border-[#F26522]/30 rounded-lg text-sm font-bold text-[#F26522]">
                Startup India #DIPP80506
              </div>
            </motion.div>
          </div>

          {/* Statistics Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
