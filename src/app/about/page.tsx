import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, FlaskConical, Award, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SMPS Electric Control Private Limited - eastern India's premier deep-tech ODM for power electronics and energy storage systems.",
};

const milestones = [
  { year: "2021", title: "Company Founded", description: "SMPS Electric Control Pvt. Ltd. incorporated in Odisha with a mission to revolutionize industrial power electronics." },
  { year: "2022", title: "First Patent Filed", description: "Filed patent for the Smart Hybrid SMPS multi-source converter technology." },
  { year: "2023", title: "ISO Certifications", description: "Achieved ISO 9001:2015 and ISO 14001:2015 certifications, validating our quality and environmental standards." },
  { year: "2024", title: "Chennai Facility Opens", description: "Inaugurated second Smart Integrated Power Electronics Manufacturing Hub in Chennai, Tamil Nadu." },
  { year: "2025", title: "5MW+ BESS Deployed", description: "Crossed 5MW of BESS capacity deployed across utilities, telecom, and defense sectors." },
];

const team = [
  { name: "Engineering R&D Team", role: "Research Scholars from IITs & NITs", icon: FlaskConical },
  { name: "Manufacturing Division", role: "2 Smart Manufacturing Hubs", icon: Factory },
  { name: "Quality & Compliance", role: "ISO 9001 & 14001 Certified", icon: Award },
  { name: "Field Operations", role: "Pan-India Deployment Teams", icon: MapPin },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bess/5.jpg" alt="SMPS Manufacturing" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] to-[#0A1128]/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#60A5FA]">SMPS Electric</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            A deep-tech startup redefining power electronics for the world&apos;s most critical infrastructure — from nuclear plants to satellite systems.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">Our Story</div>
              <h2 className="text-4xl font-black text-foreground mb-6">Born from a Vision of Zero Downtime</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                SMPS Electric Control Private Limited was founded in 2021 by a team of IIT and NIT research scholars with one bold vision: to engineer the world&apos;s most dependable power electronics systems for mission-critical infrastructure.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Starting from a small facility in Odisha, we have grown into a nationally recognized deep-tech ODM (Original Design Manufacturer), operating two Smart Integrated Power Electronics Manufacturing Hubs and serving clients across Defence, Telecom, Nuclear Energy, Space, and Renewable Energy sectors.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                Our patented Smart Hybrid SMPS technology represents years of R&D investment — delivering simultaneous multi-source power conversion that simply isn&apos;t available elsewhere in the market.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-bold">CIN: U31909OR2021PTC035471</span>
                <span className="px-4 py-2 bg-[#F26522]/10 border border-[#F26522]/30 rounded-lg text-sm font-bold text-[#F26522]">Startup India: DIPP80506</span>
                <span className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-bold">Startup Odisha: OSP/SP/01094</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/bess/EMS1.png" alt="SMPS Engineering" fill className="object-contain p-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">Our Journey</div>
            <h2 className="text-4xl font-black text-foreground">Key Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`w-full md:w-5/12 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                    <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                      <span className="text-2xl font-black text-primary mb-2 block">{m.year}</span>
                      <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md" />
                  </div>
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team/Divisions */}
      <section className="py-24 bg-[#0A1128]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 font-bold text-sm mb-4">Our Team</div>
            <h2 className="text-4xl font-black text-white">Built by the Best</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <t.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{t.name}</h3>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">Facilities</div>
            <h2 className="text-4xl font-black text-foreground">Manufacturing Hubs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Factory 1 — Odisha", address: "Plot No: 1381/6976, Mahaveer Colony, ADHALIA, DPS Kalinga School Road, PO- Phulnakhara, Dist.- Cuttack, Odisha – 754001", img: "/images/bess/2.jpg" },
              { name: "Factory 2 — Chennai", address: "Door No-G1, Plot No-1, Survey No-486/10B, Madhura Ukkottai, Poonamalle Taluk, Kuthambakkam, Chennai, Tamil Nadu – 600124", img: "/images/bess/3.jpg" },
            ].map((f) => (
              <div key={f.name} className="rounded-2xl overflow-hidden border border-border shadow-sm group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={f.img} alt={f.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-lg font-bold text-white">{f.name}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 max-w-[960px] text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Power Your Infrastructure?</h2>
          <p className="text-xl text-white/90 mb-8">Get in touch with our engineering team today.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white hover:bg-white/90 text-primary font-bold h-14 px-8 rounded-xl group")}>
            Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
