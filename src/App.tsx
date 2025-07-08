import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import YouBetterSection from "@/components/YouBetterSection"
import BioSection from "@/components/BioSection"
import ServicesSection from "@/components/ServicesSection"
import InsuranceSection from "@/components/InsuranceSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <YouBetterSection />
      <BioSection />
      <ServicesSection />
      <InsuranceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
