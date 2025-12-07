import { Button } from "@/components/ui/button";
import cafeInterior from "@/assets/cafe-interior.jpg";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              Made In Brussels
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welcome to Brussels Brewery, where the charm of Brussels meets the aroma of freshly brewed coffee. Our café is a cozy haven where friends gather, ideas spark, and every sip tells a story.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Come and experience the soul of Brussels in every cup and bite—we can't wait to welcome you!
            </p>
            <Button variant="dark" className="group">
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <img
              src={cafeInterior}
              alt="Cozy café interior with warm lighting"
              className="w-full h-80 lg:h-96 object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
