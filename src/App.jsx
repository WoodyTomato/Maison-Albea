import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ConceptSection from "./components/ConceptSection";
import FragranceSection from "./components/FragranceSection";
import SolutionsSection from "./components/SolutionsSection";
import HotelsBenefitsSection from "./components/HotelsBenefitsSection";
import CommitmentsSection from "./components/CommitmentsSection";
import PilotProgramSection from "./components/PilotProgramSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-grain text-ink antialiased">
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <FragranceSection />
        <SolutionsSection />
        <HotelsBenefitsSection />
        <CommitmentsSection />
        <PilotProgramSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

