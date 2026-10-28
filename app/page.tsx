import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Research from "@/components/Research";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Journey />
        <Experience />
        <Research />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
