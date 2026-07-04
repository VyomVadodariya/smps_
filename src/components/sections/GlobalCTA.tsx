"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function GlobalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[960px] text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
        >
          Secure Your Infrastructure with <span className="text-white opacity-90">SMPS</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Partner with eastern India's premier deep-tech ODM for uninterrupted power solutions, turnkey EPC services, and next-generation energy storage.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white hover:bg-white/90 text-primary font-bold h-14 px-8 shadow-lg text-base rounded-xl group")}>
            Request Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-8 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-bold text-base rounded-xl")}>
            Contact Engineering Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
