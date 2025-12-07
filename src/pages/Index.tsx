import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Handmade from "@/components/Handmade";
import Social from "@/components/Social";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Handmade />
        <Social />
        <Gallery />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
