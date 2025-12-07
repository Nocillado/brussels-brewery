import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-cream pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground hero-title">
              Brewed To Perfection,<br />
              Served With Love
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed hero-description">
              Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere designed to inspire and unwind.
            </p>
            <div className="flex flex-wrap gap-4 hero-buttons">
              <Button variant="hero" size="lg">
                Order Online
              </Button>
              <Button variant="hero-outline" size="lg">
                Find a Location
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end hero-image">
            <div className="relative">
              <img
                src="/Hero Image/1.jpg"
                alt="Beautifully crafted latte art in a ceramic cup"
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] object-cover rounded-full shadow-2xl"
              />
              {/* Decorative shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-foreground/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
