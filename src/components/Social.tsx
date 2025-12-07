import { Instagram, Facebook } from "lucide-react";

const Social = () => {
  return (
    <section className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Instagram */}
          <a
            href="#"
            className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 border border-cream/30 rounded-sm flex items-center justify-center">
              <Instagram className="w-6 h-6 text-cream" />
            </div>
            <div>
              <p className="text-cream font-medium">#Brusselscoffee</p>
              <p className="text-cream/60 text-sm">@Brusselsbrewery</p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 border border-cream/30 rounded-sm flex items-center justify-center bg-cream/10">
              <Facebook className="w-6 h-6 text-cream" />
            </div>
            <div>
              <p className="text-cream font-medium">Follow Us</p>
              <p className="text-cream/60 text-sm">Brusselsbrewery</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
