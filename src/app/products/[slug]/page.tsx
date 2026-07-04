import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Download, FileText, Settings, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock database for specific product details with deep engineering data
const products = {
  bess: {
    title: "BESS & Smart Energy",
    model: "S-Series (5kW - 5MW)",
    description: "Industrial-grade Battery Energy Storage System (BESS) designed for grid stability, peak shaving, and uninterrupted backup power. Engineered with high-frequency isolated DC-DC converters.",
    image: "/images/bess/1.jpg",
    specs: [
      { label: "Power Capacity", value: "5kW to 5MW (Scalable)" },
      { label: "Inverter Topology", value: "3-Level Neutral Point Clamped" },
      { label: "Peak Efficiency", value: "98.5%" },
      { label: "Switching Frequency", value: "Up to 50kHz (SiC MOSFETs)" },
      { label: "Cooling System", value: "Liquid Cooled / HVAC Hybrid" },
      { label: "Certifications", value: "IEC 62619, UL 9540, ISO 9001" },
    ],
    applications: ["Microgrid Integration", "Telecom Base Stations", "Heavy Industrial Manufacturing", "Renewable Smoothing"],
    features: [
      "Patented Bi-directional Power Flow",
      "Integrated BMS & EMS Software",
      "Hot-Swappable Modules",
      "Zero-Transfer Time Architecture"
    ]
  },
  smps: {
    title: "Hybrid SMPS Units",
    model: "Multi-port AC/DC Hybrid",
    description: "Patented Multi-source Switched Mode Power Supply that delivers simultaneous and uninterrupted AC and DC power dynamically.",
    image: "/images/bess/4.jpg",
    specs: [
      { label: "Input Voltage Range", value: "90V - 300V AC" },
      { label: "Output Options", value: "48V DC, 230V AC" },
      { label: "Conversion Efficiency", value: "99.1%" },
      { label: "Ripple & Noise", value: "< 50mV peak-to-peak" },
      { label: "Protection", value: "OVP, OCP, OTP, Short Circuit" },
      { label: "Operating Temp", value: "-40°C to +75°C" },
    ],
    applications: ["Nuclear Power Instrumentation", "Defense Tactical Radars", "Aerospace Control Systems", "Data Center Racks"],
    features: [
      "Simultaneous AC/DC Output",
      "High Power Density",
      "Military-Grade Conformal Coating",
      "Remote Telemetry via SNMP"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug: slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        
        {/* Back Link */}
        <Link href="/products" className="inline-flex items-center text-sm font-semibold text-primary hover:text-[#F26522] transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Product Catalog
        </Link>

        {/* Hero Area */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border bg-white">
              <Image 
                src={product.image} 
                alt={product.title} 
                fill 
                className="object-contain p-8"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A1128] text-white font-bold rounded-lg text-xs uppercase tracking-wider mb-6 w-max">
              <Settings className="w-4 h-4 text-[#F26522]" /> {product.model}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
              {product.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-xl font-bold px-8")}>
                Request Enterprise Quote
              </Link>
              <Link href="#" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-xl font-bold bg-white")}>
                <Download className="w-4 h-4 mr-2" /> Download Datasheet (PDF)
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Data Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Specs Table */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-foreground mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" /> Technical Specifications
            </h2>
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-slate-50 transition-colors">
                      <th className="py-4 px-6 font-semibold text-slate-600 bg-slate-50/50 w-1/3 border-r border-border">{spec.label}</th>
                      <td className="py-4 px-6 font-medium text-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#0A1128] p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Applications</h3>
              <ul className="flex flex-col gap-4">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#F26522] shrink-0" /> {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6 border-b border-border pb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Key Features
              </h3>
              <ul className="flex flex-col gap-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
