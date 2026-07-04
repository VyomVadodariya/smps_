"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings2, Activity } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const featuredProducts = [
  {
    id: "bess",
    category: "Energy Storage",
    title: "BESS & Smart Energy",
    model: "S-Series 5kW - 5MW",
    efficiency: "98.5%",
    applications: "Smart Grid, Microgrid, Telecom Base Stations",
    image: "/images/bess/1.jpg"
  },
  {
    id: "smps",
    category: "Power Conversion",
    title: "Hybrid SMPS Units",
    model: "Multi-port AC/DC",
    efficiency: "99.1%",
    applications: "Nuclear, Defense, Aerospace",
    image: "/images/bess/4.jpg"
  }
];

export function ProductsHub() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Industrial <span className="text-primary">Systems.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Engineered in-house to power the most demanding infrastructure.
            </p>
          </div>
          <Link 
            href="/products" 
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "hidden md:flex font-bold rounded-xl")}
          >
            View Complete Catalog <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Product Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[55%] relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted group border border-border"
              >
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  className="object-cover brightness-90 contrast-[1.15] saturate-[1.15] sepia-[.05] transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128]/60 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>

              {/* Product Details (Engineering Feel) */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[45%] flex flex-col"
              >
                <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
                  {product.category}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-1">
                  {product.title}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground mb-8">
                  {product.id === "bess" ? "Smart Hybrid Microgrid" : "Special Power Electronics"}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-muted p-4 rounded-xl border border-border">
                    <Settings2 className="w-5 h-5 text-muted-foreground mb-2" />
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Model / Scale</p>
                    <p className="font-bold text-foreground">{product.model}</p>
                  </div>
                  <div className="bg-muted p-4 rounded-xl border border-border">
                    <Activity className="w-5 h-5 text-[#F26522] mb-2" />
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Peak Efficiency</p>
                    <p className="font-bold text-foreground">{product.efficiency}</p>
                  </div>
                </div>

                <div className="mb-8 border-l-2 border-primary/30 pl-4">
                  <p className="text-sm font-bold text-foreground uppercase tracking-widest mb-2">Primary Applications</p>
                  <p className="text-muted-foreground font-medium">{product.applications}</p>
                </div>

                <div>
                  <Link 
                    href={`/products/${product.id}`}
                    className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-xl font-bold px-8 shadow-md group w-full sm:w-auto")}
                  >
                    View Technical Specs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <Link 
          href="/products" 
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "flex md:hidden font-bold rounded-xl mt-12 w-full justify-center")}
        >
          View Complete Catalog
        </Link>
      </div>
    </section>
  );
}
