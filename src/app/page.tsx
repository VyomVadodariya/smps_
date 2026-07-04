import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { About } from "@/components/sections/About";
import { Industries } from "@/components/sections/Industries";
import { Capabilities } from "@/components/sections/Capabilities";
import { ProductsHub } from "@/components/sections/ProductsHub";
import { NewsSection } from "@/components/sections/NewsSection";
import { GlobalCTA } from "@/components/sections/GlobalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <Industries />
      <Capabilities />
      <ProductsHub />
      <NewsSection />
      <GlobalCTA />
    </>
  );
}
