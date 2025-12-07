import { Button } from "@/components/ui/button";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import { ArrowRight } from "lucide-react";

const Handmade = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-cream-dark/10 p-8 rounded-sm">
              <img
                src={coffeeBeans}
                alt="Artisanal coffee beans in a kraft bag"
                className="w-72 h-80 object-cover"
              />
            </div>
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
      </div>
    </section>
  );
};

export default Handmade;
