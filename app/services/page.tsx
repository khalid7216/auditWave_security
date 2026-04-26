import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Servicessection";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ServicesPage() {
  return (
    <div className="bg-bg min-h-screen pt-[112px]">
      <Navbar />
      <main>
        <div className="max-w-6xl mx-auto px-6 pt-12 -mb-8">
          <Breadcrumbs 
            items={[
              { label: 'Services', href: '/services' }
            ]} 
          />
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
