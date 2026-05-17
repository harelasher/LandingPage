import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { TelemetryTicker } from "@/components/layout/TelemetryTicker";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Leadership } from "@/components/sections/Leadership";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Leadership />
      </main>
      <Footer />
      <TelemetryTicker />
    </>
  );
}
