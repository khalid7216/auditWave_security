import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Servicessection";

export default function ServicesPage() {
  return (
    <div className="bg-bg min-h-screen pt-[112px]">
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
