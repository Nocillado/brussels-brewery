import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#252224" }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Logo & Tagline */}
          <div className="space-y-4 reveal-left">
            <div className="flex items-center gap-2">
              <img
                src="/Icon/coffee-cup.png"
                alt="Brussels Brewery"
                className="w-8 h-8 object-contain"
                style={{ filter: "brightness(0) saturate(100%) invert(78%) sepia(18%) saturate(487%) hue-rotate(354deg) brightness(92%) contrast(89%)" }}
              />
              <span className="font-heading text-xl tracking-wide text-cream">
                BRUSSELS BREWERY
              </span>
            </div>
            <p className="text-cream/70 text-sm">
              Brewed To Perfection, Served With Love
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-cream/70 hover:text-cream transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-cream/70 hover:text-cream transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div className="space-y-4 reveal-right">
            <p className="text-cream font-medium">
              Join our newsletter to receive exclusive updates, and news!
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent border-cream/20 text-cream placeholder:text-cream/50 rounded-sm focus:border-cream/40"
              />
              <Button variant="dark-outline" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              ©2024 Brussels Brewery. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-cream/60 text-sm hover:text-cream transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-cream/60 text-sm hover:text-cream transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-cream/60 text-sm hover:text-cream transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
