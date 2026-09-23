import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <ProjectShowcase />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
