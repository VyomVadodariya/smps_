"use client";

import { AlertCircle, ChevronRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ANNOUNCEMENTS = [
  { id: 1, text: "SMPS Electric inaugurates new Tier-1 ODM Manufacturing line in Odisha.", date: "New", isHot: true },
  { id: 2, text: "Patented SMART HYBRID SMPS successfully deployed in Telecom Base Stations.", date: "Update", isHot: false },
  { id: 3, text: "We are hiring! Looking for Lead R&D Engineers for our Bengaluru facility.", date: "Careers", isHot: true },
  { id: 4, text: "SMPS achieves ISO 14001:2015 Certification for environmental management.", date: "Certifications", isHot: false },
];

export function NewsMarquee() {
  return (
    <div className="absolute top-[96px] left-0 w-full bg-[#0A1128]/90 backdrop-blur border-y border-white/10 flex items-center overflow-hidden h-12 z-40">
      
      {/* Label Box */}
      <div className="absolute left-0 top-0 bottom-0 z-10 bg-[#F26522] flex items-center px-4 md:px-6 shadow-[10px_0_20px_-5px_rgba(10,17,40,1)]">
        <Newspaper className="w-4 h-4 text-white mr-2 hidden md:block" />
        <span className="text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap">Latest Updates</span>
      </div>

      {/* Marquee Content */}
      <div className="flex-1 overflow-hidden ml-[120px] md:ml-[160px] relative">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-8 whitespace-nowrap px-4 py-3"
        >
          {/* Double array to create seamless loop */}
          {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, i) => (
            <Link 
              key={`${item.id}-${i}`} 
              href="/news" 
              className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group"
            >
              {item.isHot && (
                <span className="flex items-center justify-center bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full mr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1 animate-pulse" />
                  HOT
                </span>
              )}
              <span className="font-semibold text-slate-400 mr-2">[{item.date}]</span>
              {item.text}
              <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#F26522]" />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Right Fade out */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A1128] to-transparent z-10 pointer-events-none" />
    </div>
  );
}
