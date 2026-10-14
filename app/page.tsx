import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex min-h-screen snap-start snap-always flex-col">
        <Navbar />
        <Hero />
      </div>
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
