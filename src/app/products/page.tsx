import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Battery, Zap, Sun, Car, Box, ShieldAlert } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore SMPS Electric's full product catalog: BESS, Hybrid SMPS, Solar Solutions, EV Chargers, Storage Batteries, and Surge Protection Devices.",
};

const products = [
  {
    id: "bess",
    icon: Battery,
    category: "Energy Storage",
    title: "BESS & Smart Energy",
    subtitle: "S-Series 5kW – 5MW",
    description: "Battery Energy Storage Systems with proprietary multi-source converters for smart grid, microgrid, and telecom base station applications. Delivers 98.5% peak efficiency with zero downtime guarantee.",
    specs: ["5kW – 5MW Range", "98.5% Efficiency", "Smart BMS Included", "IoT Remote Monitoring"],
    image: "/images/bess/1.jpg",
    applications: ["Smart Grid / Microgrid", "Telecom Base Stations", "Renewable Energy Storage", "Industrial UPS"],
  },
  {
    id: "smps",
    icon: Zap,
    category: "Power Conversion",
    title: "Hybrid SMPS Units",
    subtitle: "Multi-port AC/DC Converter",
    description: "Patented Smart Hybrid SMPS with simultaneous multi-source power conversion. Engineered for nuclear, defense, and aerospace applications where failure is not an option.",
    specs: ["Multi-port Topology", "99.1% Efficiency", "Military Grade", "Redundant Design"],
    image: "/images/bess/4.jpg",
    applications: ["Nuclear Power Plants", "Defence Electronics", "Aerospace Systems", "Critical Infrastructure"],
  },
  {
    id: "solar",
    icon: Sun,
    category: "Solar & Renewable",
    title: "Solar Solutions",
    subtitle: "MPPT Chargers & Hybrid Inverters",
    description: "High-efficiency solar MPPT chargers and hybrid inverters designed for rooftop and ground-mounted solar installations. Seamlessly integrates with grid and battery storage.",
    specs: ["MPPT Technology", "96% Efficiency", "Grid-Tie Ready", "Hybrid Architecture"],
    image: "/images/bess/6.jpg",
    applications: ["Rooftop Solar", "Ground Mounted Solar", "Off-Grid Systems", "Solar Microgrids"],
  },
  {
    id: "ev",
    icon: Car,
    category: "EV Infrastructure",
    title: "EV Charging Stations",
    subtitle: "2-Wheeler to Heavy Vehicle",
    description: "Complete EV charging infrastructure from two-wheeler AC chargers to heavy commercial vehicle DC fast chargers. Fleet management ready with smart monitoring.",
    specs: ["3.3kW – 240kW", "CCS2 / CHAdeMO", "Smart Metering", "Fleet Management"],
    image: "/images/bess/2.jpg",
    applications: ["Commercial Parking", "Highway Corridors", "Fleet Depots", "Residential Complexes"],
  },
  {
    id: "batteries",
    icon: Box,
    category: "Energy Storage",
    title: "Storage Batteries",
    subtitle: "Lead Acid, Li-Ion, LiFePO4",
    description: "Industrial-grade storage batteries including VRLA Lead Acid, Lithium-Ion, and LiFePO4 chemistries, optimized for deep-cycle and high-discharge applications.",
    specs: ["Multiple Chemistries", "BMS Integration", "Cycle Life 2000+", "Wide Temperature Range"],
    image: "/images/bess/BMS.jpg",
    applications: ["BESS Integration", "Solar Storage", "UPS Backup", "Telecom"],
  },
  {
    id: "protection",
    icon: ShieldAlert,
    category: "Protection Devices",
    title: "Surge & Lightning Protection",
    subtitle: "Single / Three Phase AC & DC SPD",
    description: "Type 1, 2, and 3 Surge Protection Devices (SPDs) for complete AC and DC circuit protection against transient overvoltages and lightning strikes.",
    specs: ["Type 1 / 2 / 3", "AC & DC Protection", "IEC 61643 Compliant", "Remote Alarm"],
    image: "/images/bess/3.jpg",
    applications: ["Solar Plants", "Telecom Towers", "Industrial Panels", "Data Centers"],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bess/EMS2.png" alt="Products" fill className="object-contain opacity-10 p-16" />
          <div className="absolute inset-0 bg-[#0A1128]/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#60A5FA]">Catalog</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Engineered in-house for the world&apos;s most demanding infrastructure. Every product is ISO certified and battle-tested.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="flex flex-col gap-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full lg:w-[50%] relative aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-lg group">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128]/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-[50%]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">{product.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-1">{product.title}</h2>
                  <p className="text-sm font-semibold text-muted-foreground mb-6">{product.subtitle}</p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="font-semibold text-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mb-8 p-4 bg-muted rounded-xl border border-border">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Applications</p>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span key={app} className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-foreground border border-border">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ size: "lg" }), "rounded-xl font-bold px-8 group")}
                  >
                    Request Datasheet <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1128]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[960px] text-center">
          <h2 className="text-4xl font-black text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-300 mb-8">Our engineers can design bespoke power systems for your specific requirements.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-[#F26522] hover:bg-[#F26522]/90 text-white font-bold h-14 px-8 rounded-xl group")}>
            Talk to an Engineer <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
