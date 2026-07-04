import { CONTACT_INFO } from "@/lib/constants";
import { Mail, MapPin, Phone, Building2, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24">
      {/* Hero */}
      <section className="bg-[#0A1128] py-20 border-b-4 border-[#F26522]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Partner with <span className="text-[#F26522]">SMPS.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            Request an enterprise quote, technical specifications, or schedule a consultation with our deep-tech R&D team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info (Left) */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-3xl font-black text-foreground mb-8">Direct Communication</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email Us</h3>
                      {CONTACT_INFO.emails.map(email => (
                        <p key={email} className="text-muted-foreground text-sm font-medium">{email}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col gap-4">
                    <div className="w-12 h-12 bg-[#F26522]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#F26522]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                      {CONTACT_INFO.phones.map(phone => (
                        <p key={phone} className="text-muted-foreground text-sm font-medium">{phone}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black text-foreground mb-8">Global Facilities</h2>
                <div className="flex flex-col gap-6">
                  {CONTACT_INFO.factories.map(factory => (
                    <div key={factory.name} className="bg-white p-6 rounded-2xl border border-border shadow-sm flex gap-4">
                      <Building2 className="w-8 h-8 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">{factory.name}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                          {factory.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Form (Right) */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-xl h-fit sticky top-32">
              <div className="flex items-center gap-2 mb-8">
                <Clock className="w-5 h-5 text-[#F26522]" />
                <span className="font-bold text-foreground text-sm uppercase tracking-wider">Fast RFQ Response (24h)</span>
              </div>
              
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">First Name *</label>
                    <input type="text" className="w-full bg-slate-50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-medium" placeholder="John" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Last Name *</label>
                    <input type="text" className="w-full bg-slate-50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-medium" placeholder="Doe" required />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground">Company / Organization *</label>
                  <input type="text" className="w-full bg-slate-50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-medium" placeholder="Acme Corp" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Corporate Email *</label>
                    <input type="email" className="w-full bg-slate-50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-medium" placeholder="john@company.com" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-medium" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground">Product Interest / Sector *</label>
                  <select defaultValue="" className="w-full bg-slate-50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-medium text-foreground" required>
                    <option value="" disabled>Select a category...</option>
                    <option value="bess">BESS & Smart Energy Storage</option>
                    <option value="smps">Patented Hybrid SMPS</option>
                    <option value="ev">EV Charging Infrastructure</option>
                    <option value="solar">Solar EPC & Controllers</option>
                    <option value="other">Other / Custom OEM Request</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground">Technical Requirements / Message</label>
                  <textarea className="w-full bg-slate-50 border border-border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-medium min-h-[120px]" placeholder="Please detail your power capacity requirements, intended application, or specific constraints..."></textarea>
                </div>

                <Button type="button" size="lg" className="h-14 font-bold text-lg rounded-xl shadow-lg group mt-4">
                  Submit Technical Inquiry <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground text-center font-medium mt-2">
                  Your data is strictly confidential and protected by standard NDA protocol.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
