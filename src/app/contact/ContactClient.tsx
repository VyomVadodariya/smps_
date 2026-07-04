"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const offices = [
  {
    name: "Factory 1 — Odisha",
    address: "Plot No: 1381/6976, Mahaveer Colony, ADHALIA, DPS Kalinga School Road, PO- Phulnakhara, Dist.- Cuttack, Odisha – 754001, INDIA",
    type: "Manufacturing Hub",
    img: "/images/bess/2.jpg",
  },
  {
    name: "Factory 2 — Chennai",
    address: "Door No-G1, Plot No-1, Survey No-486/10B, Madhura Ukkottai, Poonamalle Taluk, Kuthambakkam, Chennai, Tamil Nadu – 600124, India",
    type: "Smart Integrated Power Hub",
    img: "/images/bess/3.jpg",
  },
];

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", product: "", message: "", submitted: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm((p) => ({ ...p, submitted: true }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bess/6.jpg" alt="Contact SMPS" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] to-[#0A1128]/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            {"Let's"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#60A5FA]">Connect</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            Whether you need a custom power solution, a product inquiry, or want to explore a partnership — our engineering team is ready.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-foreground mb-8">Get in Touch</h2>
              
              <div className="flex flex-col gap-6 mb-10">
                <a href="tel:+917077880478" className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border hover:border-primary/40 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-bold text-foreground">+91-7077880478</p>
                    <p className="text-sm text-muted-foreground">+91-8072566791 (WhatsApp)</p>
                  </div>
                </a>

                <a href="mailto:info@smpselectric.com" className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border hover:border-primary/40 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-bold text-foreground">info@smpselectric.com</p>
                    <p className="text-sm text-muted-foreground">ceo@smpselectric.com</p>
                  </div>
                </a>
              </div>

              {/* Social */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.linkedin.com/in/smps-electric-177a41216/", icon: FaLinkedin, label: "LinkedIn" },
                    { href: "https://www.facebook.com/smps.elect", icon: FaFacebook, label: "Facebook" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors text-sm font-semibold text-foreground">
                      <s.icon className="w-4 h-4 text-primary" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Offices */}
              <h3 className="text-xl font-black text-foreground mb-6">Our Facilities</h3>
              <div className="flex flex-col gap-6">
                {offices.map((o) => (
                  <div key={o.name} className="rounded-2xl overflow-hidden border border-border">
                    <div className="relative h-36">
                      <Image src={o.img} alt={o.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/70 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <p className="text-white font-bold text-sm">{o.name}</p>
                        <p className="text-white/70 text-xs">{o.type}</p>
                      </div>
                    </div>
                    <div className="p-4 flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-xs leading-relaxed">{o.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-foreground mb-8">Send an Inquiry</h2>
              {form.submitted ? (
                <div className="flex flex-col items-center justify-center h-64 text-center p-12 bg-green-50 rounded-3xl border border-green-200">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2">Inquiry Sent!</h3>
                  <p className="text-muted-foreground">Our engineering team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        placeholder="John Smith"
                        className="w-full border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Company Name</label>
                      <input type="text" value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                        placeholder="Acme Corp"
                        className="w-full border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm bg-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="w-full border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Product / Service Interest</label>
                    <select value={form.product} onChange={(e) => setForm((p) => ({ ...p, product: e.target.value }))}
                      className="w-full border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-sm bg-white appearance-none"
                    >
                      <option value="">Select a product or service...</option>
                      <option value="bess">BESS &amp; Smart Energy</option>
                      <option value="smps">Hybrid SMPS Units</option>
                      <option value="solar">Solar Solutions</option>
                      <option value="ev">EV Charging Stations</option>
                      <option value="batteries">Storage Batteries</option>
                      <option value="protection">Surge Protection</option>
                      <option value="epc-bess">EPC on BESS</option>
                      <option value="epc-solar">EPC on Solar</option>
                      <option value="epc-ev">EPC on EV Charging</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      placeholder="Tell us about your project, requirements, and timeline..."
                      className="w-full border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-sm bg-white resize-none"
                    />
                  </div>
                  <button type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group text-base"
                  >
                    Send Inquiry <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy. We will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
