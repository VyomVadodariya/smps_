"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const newsItems = [
  {
    id: 1,
    category: "Manufacturing",
    categoryColor: "bg-primary/10 text-primary",
    date: "June 2025",
    title: "SMPS Electric Inaugurates New Tier-1 ODM Manufacturing Line in Odisha",
    excerpt: "Our state-of-the-art manufacturing hub now features advanced automated assembly lines for BESS and industrial SMPS production, increasing capacity by 3x.",
    image: "/images/bess/5.jpg",
  },
  {
    id: 2,
    category: "Product Launch",
    categoryColor: "bg-[#F26522]/10 text-[#F26522]",
    date: "April 2025",
    title: "Patented Smart Hybrid SMPS Successfully Deployed in Telecom Base Stations",
    excerpt: "Our patented Smart Hybrid SMPS has been deployed across 50+ telecom base stations, delivering 99.9% uptime in mission-critical environments.",
    image: "/images/bess/2.jpg",
  },
  {
    id: 3,
    category: "Certification",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    date: "February 2025",
    title: "SMPS Electric Achieves ISO 14001:2015 Certification for Environmental Management",
    excerpt: "We are proud to announce our ISO 14001:2015 certification, reinforcing our commitment to sustainable and environmentally responsible manufacturing.",
    image: "/images/bess/1.jpg",
  },
];

export function NewsSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4"
            >
              Latest Updates
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
            >
              News & <span className="text-primary">Events</span>
            </motion.h2>
          </div>
          <Link
            href="/news"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "hidden md:flex font-bold rounded-xl")}
          >
            View All News <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 to-transparent" />
                {/* Category on image */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${item.categoryColor} backdrop-blur-sm bg-white/80`}>
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="text-base font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2.5 transition-all"
                >
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href="/news"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full font-bold rounded-xl")}
          >
            View All News <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
