"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-[#0A1128]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bess/1.jpg"
          alt="SMPS Engineering"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-[#0A1128]/95 to-[#0A1128] z-10" />
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] z-10 pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#F26522]/20 rounded-full blur-[100px] z-10 pointer-events-none" 
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 lg:px-8 max-w-[1440px] pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-semibold mb-8 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-[#F26522]" /> Deep-Tech ODM Engineering
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-10">
                Reliable Power Systems for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#60A5FA]">Mission-Critical</span> Infrastructure.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium"
            >
              From Battery Energy Storage Systems to Industrial Power Electronics, SMPS engineers dependable solutions for utilities, telecom, renewable energy, and industrial applications.
            </motion.p>

            {/* Ecosystem Animated Diagram */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex items-center flex-wrap gap-2 md:gap-4 mb-10 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider"
            >
              <span className="text-white">Power Electronics</span>
              <motion.div className="h-[2px] bg-gradient-to-r from-primary to-transparent w-6 md:w-12 relative overflow-hidden">
                <motion.div className="absolute top-0 left-0 h-full w-full bg-white/50" animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
              </motion.div>
              <span className="text-white">Energy Storage</span>
              <motion.div className="h-[2px] bg-gradient-to-r from-[#F26522] to-transparent w-6 md:w-12 relative overflow-hidden">
                <motion.div className="absolute top-0 left-0 h-full w-full bg-white/50" animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }} />
              </motion.div>
              <span className="text-white">EV Infrastructure</span>
              <motion.div className="h-[2px] bg-gradient-to-r from-primary to-transparent w-6 md:w-12 relative overflow-hidden hidden sm:block">
                <motion.div className="absolute top-0 left-0 h-full w-full bg-white/50" animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1 }} />
              </motion.div>
              <span className="text-white hidden sm:block">Industrial Automation</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/products" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-base shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_0px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 rounded-xl group")}>
                Explore Systems
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/manufacturing" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "font-bold h-14 px-8 text-base rounded-xl border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm group")}>
                <Play className="w-5 h-5 mr-2 text-[#F26522] fill-[#F26522] group-hover:scale-110 transition-transform" />
                View Manufacturing
              </Link>
            </motion.div>
          </div>

          {/* Floating Product Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[110%] -right-[5%] aspect-[4/3]">
              {/* Complex layering for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-full h-full p-8"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A1128]/50 backdrop-blur-md">
                  <Image 
                    src="/images/bess/EMS2.png" 
                    alt="SMPS Engineering Diagram" 
                    fill 
                    className="object-contain p-8 mix-blend-screen opacity-90"
                  />
                  {/* Overlay stats */}
                  <div className="absolute top-8 left-8 bg-[#0A1128]/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl">
                    <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mb-1">Efficiency</p>
                    <p className="text-2xl font-black text-white">99.9%</p>
                  </div>
                  <div className="absolute bottom-8 right-8 bg-[#0A1128]/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl">
                    <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mb-1">Uptime</p>
                    <p className="text-2xl font-black text-[#F26522]">Zero Downtime</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Hero Trust Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="container relative z-20 mx-auto px-4 lg:px-8 max-w-[1440px] mt-24 mb-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs">Trusted By Core Industries</p>
        <div className="flex flex-wrap gap-8 items-center justify-center opacity-70 grayscale">
          <span className="text-white font-bold text-sm flex items-center gap-2">✔ ISO 9001:2015</span>
          <span className="text-white font-bold text-sm flex items-center gap-2">✔ ISO 14001:2015</span>
          <span className="text-white font-bold text-sm flex items-center gap-2">✔ Startup India</span>
          <span className="text-white font-bold text-sm flex items-center gap-2">✔ Telecom & Defense</span>
        </div>
      </motion.div>
      
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
