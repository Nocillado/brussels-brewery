import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Handmade = () => {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: "#252224" }}>
      <div className="container mx-auto px-6 space-y-24">
        {/* Handmade Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/Images/1.jpg"
              alt="Artisanal coffee beans in a kraft bag"
              className="w-full h-80 lg:h-96 object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl text-cream">
              Handmade Just For You
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed max-w-md">
              Our organically grown coffee beans are roasted over an open flame in a one-of-a-kind, brick roaster. There's nothing quite like a cup of Brussels Brewery coffee.
            </p>
            <Button variant="dark-outline" className="group">
              View our menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Made In Brussels Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="font-heading text-4xl md:text-5xl text-cream">
              Made In Brussels
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed">
              Welcome to Brussels Brewery, where the charm of Brussels meets the aroma of freshly brewed coffee. Our café is a cozy haven where friends gather, ideas spark, and every sip tells a story.
            </p>
            <p className="text-cream/70 leading-relaxed">
              Come and experience the soul of Brussels in every cup and bite—we can't wait to welcome you!
            </p>
            <Button variant="dark-outline" className="group">
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/Images/2.jpg"
              alt="Cozy café interior with warm lighting"
              className="w-full h-80 lg:h-96 object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Handmade;
