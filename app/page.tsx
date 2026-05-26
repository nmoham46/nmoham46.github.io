import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Divider() {
  return (
    <div className="section-shell">
      <div className="section-divider" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-hidden">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Education />
      <Divider />
      <Certifications />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
