import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, ShieldCheck, Microscope, ArrowRight, FileCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="relative py-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/bess/3.jpg" 
            alt="Manufacturing Facility" 
            fill 
            className="object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Tier-1 <span className="text-[#F26522]">ODM Manufacturing</span> & Testing.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              We operate state-of-the-art manufacturing lines in Odisha and Chennai, backed by elite deep-tech R&D centers in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* R&D and QA */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg mb-6 uppercase tracking-wider text-sm">
                <Microscope className="w-5 h-5" /> Research & Development
              </div>
              <h2 className="text-4xl font-black text-foreground mb-6">Engineered by IIT & NIT Scholars.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our R&D facility in Bengaluru is dedicated to advancing Smart Grid electronics and patented multi-port AC/DC Hybrid SMPS systems. We don't just assemble; we innovate at the silicon and circuit level.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3 font-semibold text-foreground"><ShieldCheck className="w-5 h-5 text-primary" /> ISO 9001:2015 Quality Management</li>
                <li className="flex items-center gap-3 font-semibold text-foreground"><ShieldCheck className="w-5 h-5 text-primary" /> ISO 14001:2015 Environmental Management</li>
                <li className="flex items-center gap-3 font-semibold text-foreground"><ShieldCheck className="w-5 h-5 text-primary" /> 100% In-House Testing Lines</li>
              </ul>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image src="/images/bess/EMS2.png" alt="Engineering Schematic" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">Global Production Hubs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Strategically located to serve domestic and international infrastructure projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-3xl border border-border">
              <Factory className="w-12 h-12 text-[#F26522] mb-6" />
              <h3 className="text-3xl font-black text-foreground mb-4">Odisha Hub</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Primary manufacturing center for large-scale BESS and industrial electronics. Equipped with automated assembly and extreme-condition stress testing chambers.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground bg-white px-4 py-3 rounded-lg border border-border w-max">
                <MapPin className="w-4 h-4 text-primary" /> Khurda, Bhubaneswar
              </div>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-3xl border border-border">
              <Factory className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-black text-foreground mb-4">Chennai Hub</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Specialized production line for Smart EV Chargers and high-frequency Telecom SMPS units. Focused on rapid deployment and export markets.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground bg-white px-4 py-3 rounded-lg border border-border w-max">
                <MapPin className="w-4 h-4 text-primary" /> Chennai, Tamil Nadu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F26522] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <h2 className="text-4xl font-black mb-6">Need a custom OEM solution?</h2>
          <p className="text-xl font-medium text-white/90 mb-10 max-w-2xl mx-auto">
            Our engineering team can modify our patented architectures to meet your exact industrial specifications.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-white text-[#F26522] hover:bg-slate-100 border-none font-bold text-lg h-14 px-8 rounded-xl shadow-xl")}>
            Request Technical Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
