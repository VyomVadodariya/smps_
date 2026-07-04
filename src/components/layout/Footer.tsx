"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1128] text-white border-t-4 border-[#F26522]">
      {/* Pre-Footer Trust Strip */}
      <div className="bg-[#050A18] border-b border-white/5 py-4 mb-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] flex flex-wrap items-center justify-center gap-6 md:gap-16 text-xs md:text-sm font-semibold text-slate-400">
          <span className="flex items-center gap-2">✓ Manufacturing Facilities</span>
          <span className="flex items-center gap-2">✓ Engineering R&D</span>
          <span className="flex items-center gap-2">✓ Enterprise Support</span>
          <span className="flex items-center gap-2">✓ Product Documentation</span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
          
          {/* Brand & Certifications */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block bg-white p-3 rounded-lg w-fit">
              <Image 
                src="/logo-full.png" 
                alt={SITE_CONFIG.title} 
                width={918} 
                height={168}
                className="object-contain h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 leading-snug mt-1 max-w-sm text-sm">
              Deep-tech startup delivering next-generation technological products and patented SMART HYBRID SMPS for the world's most critical infrastructure.
            </p>
            <div className="flex flex-col gap-1 mt-4 text-xs text-slate-300">
              <p className="font-bold text-slate-200">SMPS ELECTRIC CONTROL PRIVATE LIMITED</p>
              <p>CIN: U31909OR2021PTC035471 | PAN: ABFCS3539R | TAN: BBNS10777E</p>
              <p className="text-[#F26522] font-semibold mt-1">Startup India: DIPP80506 & Startup Odisha: OSP/SP/01094</p>
              <p className="text-[#F26522] font-semibold">An ISO 9001:2015 and 14001:2015 Certified Company</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base mb-4 text-white tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.title}
                  </Link>
                </li>
              ))}
              <li><Link href="/products" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Download Brochure</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Product Catalogue</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Datasheets</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-base mb-1 text-white tracking-wider">Manufacturing</h4>
              {CONTACT_INFO.factories.map((factory) => (
                <div key={factory.name} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-200 text-sm mb-1">{factory.name}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{factory.address}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-base mb-1 text-white tracking-wider">Connect</h4>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  {CONTACT_INFO.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-sm">
                      <Mail className="w-4 h-4 shrink-0 text-[#F26522]" /> {email}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\D/g,'')}`} className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-sm">
                      <Phone className="w-4 h-4 shrink-0 text-[#F26522]" /> {phone}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Newsletter / CTA */}
              <div className="mt-4">
                <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg" }) + " w-full font-bold bg-[#F26522] hover:bg-[#F26522]/90 text-white rounded-xl shadow-lg shadow-[#F26522]/20"}>
                  Request Enterprise Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs md:text-sm">
            © {currentYear} {SITE_CONFIG.title}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.title} href={link.href} className="text-slate-500 hover:text-slate-300 transition-colors text-sm">
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.social.map((link) => {
              const Icon = 
                link.title === "LinkedIn" ? FaLinkedin :
                link.title === "Facebook" ? FaFacebook :
                link.title === "Twitter" ? FaTwitter :
                link.title === "YouTube" ? FaYoutube : null;

              return (
                <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-[#F26522] transition-colors text-sm font-medium group">
                  {Icon && <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                  <span className="hidden md:inline-block">{link.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
