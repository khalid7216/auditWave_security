import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Vulnerabilities from "@/components/Vulnerabilities";
import HallOfFame from "@/components/HallOfFame";
import Certifications from "@/components/Certifications";
import Platforms from "@/components/Platforms";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Timeline />
      <Vulnerabilities />
      <HallOfFame />
      <Certifications />
      <Platforms />
      <Contact />
      <Footer />
    </>
  );
}
