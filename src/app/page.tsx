import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { TelemetryTicker } from "@/components/layout/TelemetryTicker";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Leadership } from "@/components/sections/Leadership";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harel Asher",
  url: "https://harelasher.com",
  jobTitle: "Software Developer",
  description:
    "Software Developer specializing in GenAI integration and high-performance systems.",
  sameAs: [
    "https://linkedin.com/in/harel-asher",
    "https://github.com/harelasher",
  ],
  knowsAbout: [
    "RAG / Embeddings",
    "LangChain",
    "Agents",
    "Prompt Engineering",
    "pgvector",
    "C#",
    "TypeScript",
    "Python",
    "React",
    "Node.js",
    "Express",
    "SQL",
    "Docker",
    "REST APIs",
    "Git",
    "Client-Server Architecture",
    "Generative AI",
    "Full-Stack Development",
  ],
  email: "harelasher1@gmail.com",
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
