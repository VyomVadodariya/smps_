export default function IndustriesPage() {
  const industries = [
    { title: "Smart Grid / Microgrid", desc: "Next-generation energy distribution" },
    { title: "Space Power Electronics", desc: "High-reliability aerospace systems" },
    { title: "Defence & Electronics Warfare", desc: "Mission-critical tactical power" },
    { title: "Nuclear Power Sector", desc: "Fail-safe nuclear facility solutions" },
    { title: "Telecom Tower", desc: "5G & 6G infrastructure power" }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="bg-primary py-24 border-b border-primary/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed font-medium">
            Powering the most demanding and critical sectors across the globe.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div key={ind.title} className="p-8 rounded-2xl bg-muted border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">{ind.title}</h3>
                <p className="text-muted-foreground">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
