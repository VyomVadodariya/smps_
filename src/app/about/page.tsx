import { motion } from "framer-motion";
import { Building2, Rocket, BrainCircuit, ShieldCheck, Factory } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 max-w-4xl">
            Think Beyond <span className="text-white opacity-80">Smart Powertronics.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed font-medium">
            SMPS Electric Control Private Limited is a young, dynamic, and result-oriented deep-tech startup based in Eastern India. We deliver next-generation technological products for a smarter society.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-primary font-bold tracking-wider uppercase text-sm mb-2">
                <Rocket className="w-5 h-5" /> Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                Enterprise Scale ODM for Industrial Power Electronics
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are a major Original Design Manufacturer (ODM) specializing in industrial power electronics, IoT product innovation, design, manufacturing, and complete system integration.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our patented <strong className="text-foreground">SMART HYBRID SMPS</strong> is a unique multi-source converter capable of delivering both AC and DC power supply simultaneously and uninterruptedly, setting a new standard in Clean Tech.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-muted rounded-2xl border border-border">
                <BrainCircuit className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Deep-Tech R&D</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our full-fledged R&D center in Bengaluru is driven by research scholars from premier institutions like IIT and NIT.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-2xl border border-border">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Mission Critical</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building next-gen tech for Smart Grids, e-Mobility, Nuclear, Space, and Electronic Warfare systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-4">
              Our Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We operate state-of-the-art manufacturing hubs and technology labs to ensure rapid deployment of our power solutions globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <Factory className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">Factory I (Odisha)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Plot No: 1381/6976, Mahaveer Colony, ADHALIA, DPS Kalinga School Road, PO- Phulnakhara, Dist.- Cuttack, Odisha – 754001, (INDIA)
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <Factory className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">Factory II (Chennai)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Smart Integrated Power Electronics Manufacturing Hub, Door No-G1, Plot No-1, Survey No-486/10B, Kuthambakkam, Chennai, Tamil Nadu – 600124
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <Building2 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">R&D Center (Bengaluru)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                SMPS TECH LAB™, Ground Floor, VTU-VRIF-TCOE Building, 1st Main Road, RHCS Layout, Annapoorneswari Nagar, Naagarabhaavi, Bengaluru – 560091
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
