import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Capabilities } from "@/components/sections/Capabilities";
import { ProductsHub } from "@/components/sections/ProductsHub";
import { GlobalCTA } from "@/components/sections/GlobalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Capabilities />
      <ProductsHub />
      <GlobalCTA />
    </>
  );
}
