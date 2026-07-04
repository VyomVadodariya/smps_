"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Send, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function GlobalCTA() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", submitted: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, submitted: true }));
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0A1128]">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bess/6.jpg"
          alt="SMPS Manufacturing"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/90 to-[#0A1128]/70" />
      </div>

      {/* Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#F26522]/15 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Heading & Contact Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 font-bold text-sm mb-6"
            >
              Get in Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-[1.1]"
            >
              Secure Your Infrastructure<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#60A5FA]">with SMPS Electric</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-300 mb-10 leading-relaxed font-medium"
            >
              Partner with eastern India&apos;s premier deep-tech ODM for uninterrupted power solutions, turnkey EPC services, and next-generation energy storage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 mb-10"
            >
              <a href="tel:+917077880478" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+91-7077880478</span>
              </a>
              <a href="mailto:info@smpselectric.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">info@smpselectric.com</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-xl group")}
              >
                Request Enterprise Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-8 border-white/20 bg-transparent text-white hover:bg-white/10 font-bold rounded-xl")}
              >
                View Products
              </Link>
            </motion.div>
          </div>

          {/* Right: Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
          >
            {formState.submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-white mb-6">Quick Inquiry</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                      placeholder="John Smith"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                      placeholder="john@company.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Product Interest</label>
                    <select
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm appearance-none"
                    >
                      <option value="" className="bg-[#0A1128]">Select a product...</option>
                      <option value="bess" className="bg-[#0A1128]">BESS & Smart Energy</option>
                      <option value="smps" className="bg-[#0A1128]">Hybrid SMPS Units</option>
                      <option value="solar" className="bg-[#0A1128]">Solar Solutions</option>
                      <option value="ev" className="bg-[#0A1128]">EV Charging Stations</option>
                      <option value="epc" className="bg-[#0A1128]">EPC Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Message</label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#F26522] hover:bg-[#F26522]/90 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                  >
                    Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
