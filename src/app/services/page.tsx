import { motion } from "framer-motion";
import { Battery, Sun, CarFront, Factory, RadioTower, Zap } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "EPC on BESS Projects",
    description: "Complete solutions for providing uninterrupted power supply through large-scale Battery Energy Storage Systems. Ensuring zero interruption power supply for critical infrastructure.",
    icon: Battery,
    image: "/images/bess/BMS for BED.jpg"
  },
  {
    title: "EPC on Solar Installation Projects",
    description: "Turnkey roof top and ground mounted solar projects. Involves Design, Detailed Engineering, Procurement, Construction & Commissioning of Ongrid, Offgrid and Hybrid Solar projects (1kW to 1000kWp).",
    icon: Sun,
    image: "/images/bess/3.jpg"
  },
  {
    title: "EPC on EV Charging Parks",
    description: "Large-scale EV Charging station parks. Full supply, installation, testing and commissioning projects for the next generation of mobility.",
    icon: CarFront,
    image: "/images/bess/2.jpg"
  },
  {
    title: "Industrial Power Systems",
    description: "Large-scale power sector projects including complex industrial electrical and power electronics instrumentations.",
    icon: Factory,
    image: "/images/bess/EMS2.png"
  },
  {
    title: "Telecom Tower Base Station Power",
    description: "Telecom tower base station power supply projects ensuring reliable 5G and 6G infrastructure power.",
    icon: RadioTower,
    image: "/images/bess/BMS.jpg"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="bg-primary py-24 border-b border-primary/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 max-w-4xl">
            EPC Turnkey Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed font-medium">
            From design and engineering to procurement and commissioning. We take up large-scale energy and infrastructure projects on a turnkey basis.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`bg-muted rounded-2xl overflow-hidden border border-border flex flex-col sm:flex-row ${index === 0 ? "lg:col-span-2 sm:flex-row" : ""}`}
              >
                <div className={`relative w-full ${index === 0 ? "sm:w-1/2" : "sm:w-2/5"} min-h-[250px]`}>
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className={`p-8 flex flex-col justify-center w-full ${index === 0 ? "sm:w-1/2" : "sm:w-3/5"}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
