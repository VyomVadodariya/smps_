import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, PlugZap, Sun, CarFront, Zap, Radio } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const productCategories = [
  {
    id: "bess",
    title: "BESS and Smart Energy Storage System",
    description: "High-density Battery Energy Storage Systems from 5kW to 5MW for critical grids. Complete with advanced BMS and IoT integration.",
    icon: BatteryCharging,
    image: "/images/bess/1.jpg",
    features: [
      "5kW - 5MW Capacity",
      "Smartgrid / Microgrid Ready",
      "Telecom Tower Base Station Power",
      "LiFePo4 Battery with compatible BMS"
    ]
  },
  {
    id: "smps",
    title: "SMPS Power Supply Units",
    description: "Patented SMART HYBRID SMPS multi-source converters delivering simultaneous, uninterrupted AC & DC power supply.",
    icon: PlugZap,
    image: "/images/bess/4.jpg",
    features: [
      "Smart SMPS (5A – 500A and 6V – 220V DC)",
      "Hybrid AC DC SMPS Power Supply",
      "Multi-port AC and DC power supply",
      "DC-DC Bi-Directional Converters"
    ]
  },
  {
    id: "solar",
    title: "Solar Solutions",
    description: "Advanced MPPT chargers and Inverters for Hybrid, Ongrid, and Offgrid solar projects.",
    icon: Sun,
    image: "/images/bess/5.jpg",
    features: [
      "Solar MPPT Charger upto 200A, 450V DC",
      "Grid-Solar MPPT Hybrid Charger",
      "Hybrid Offgrid Solar Inverter",
      "Roof Top Nanogrid Solutions"
    ]
  },
  {
    id: "ev",
    title: "EV Charging Stations",
    description: "Comprehensive EV charging infrastructure ranging from two-wheeler to heavy vehicle FAST EV chargers.",
    icon: CarFront,
    image: "/images/bess/6.jpg",
    features: [
      "Two & Three Wheeler EV Charger",
      "Four Wheeler EV Charger",
      "Heavy Vehicle EV Charger",
      "FAST EV Chargers"
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="bg-muted py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Engineered in-house to power the most demanding industrial, commercial, and mission-critical requirements globally.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="flex flex-col gap-24">
            {productCategories.map((category, index) => (
              <div 
                key={category.id} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden border border-border shadow-sm aspect-[4/3] bg-muted group">
                  <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <h2 className="text-3xl font-black text-foreground">{category.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 mb-4">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link 
                      href={`/products/${category.id}`} 
                      className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-xl font-bold px-8 shadow-glow")}
                    >
                      View Specifications <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
