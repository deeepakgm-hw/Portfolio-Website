import Nav from "@/components/Nav";
import Hero, { Portrait } from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import TechStack from "@/components/TechStack";
import Journey from "@/components/Journey";
import Halfwave from "@/components/Halfwave";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Portrait />
        <About />
        <Projects />
        <Capabilities />
        <TechStack />
        <Journey />
        <Halfwave />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
