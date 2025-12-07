import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 8h16M4 16h16M8 4v16M16 4v16" />
              </svg>
              <span className="font-heading text-xl tracking-wide text-foreground">
                BRUSSELS BREWERY
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Brewed To Perfection, Served With Love
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div className="space-y-4">
            <p className="text-foreground font-medium">
              Join our newsletter to receive exclusive updates, and news!
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent border-foreground/20 rounded-sm focus:border-foreground/40"
              />
              <Button variant="dark" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              ©2024 Brussels Brewery. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
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
