import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LanguageGrid from "@/components/LanguageGrid";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LanguageGrid />
      <Features />
      <Courses />
      <Footer />
    </div>
  );
};

export default Index;
