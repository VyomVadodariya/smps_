"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-250 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 py-2 pr-4 pl-2">
            <Image 
              src="/logo-full.png" 
              alt="SMPS" 
              width={918} 
              height={168} 
              className="object-contain h-14 lg:h-16 xl:h-20 w-auto mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {NAVIGATION.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-semibold transition-colors hover:text-primary flex items-center gap-1 py-8 ${
                    isScrolled ? 'text-foreground/90' : 'text-foreground'
                  }`}
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-250" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max min-w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 transform origin-top-center scale-95 group-hover:scale-100 pt-2">
                    <div className="bg-popover border border-border shadow-lg rounded-xl overflow-hidden p-4 grid grid-cols-2 gap-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="flex flex-col gap-1 p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <span className="text-sm font-semibold text-foreground">{sub.title}</span>
                          <span className="text-xs text-muted-foreground">{sub.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden xl:flex font-semibold")}>
              Partner with SMPS
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow")}>
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="text-foreground" />}>
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l-border">
                <nav className="flex flex-col gap-6 mt-8">
                  <Accordion className="w-full">
                    {NAVIGATION.map((item, index) => (
                      item.submenu ? (
                        <AccordionItem key={item.title} className="border-b-border">
                          <AccordionTrigger className="text-base font-semibold hover:no-underline">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-3 pl-4 pt-2">
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-2"
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={item.title} className="py-4 border-b border-border">
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-semibold hover:text-primary transition-colors"
                          >
                            {item.title}
                          </Link>
                        </div>
                      )
                    ))}
                  </Accordion>
                  <div className="flex flex-col gap-4 mt-4">
                    <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full justify-center")}>
                      Partner with SMPS
                    </Link>
                    <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), "w-full justify-center shadow-glow")}>
                      Request Quote
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
