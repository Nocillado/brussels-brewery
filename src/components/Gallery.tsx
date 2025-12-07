import croissant from "@/assets/croissant.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import espressoPour from "@/assets/espresso-pour.jpg";
import baristaArt from "@/assets/barista-art.jpg";

const Gallery = () => {
  const images = [
    { src: croissant, alt: "Fresh croissant" },
    { src: icedCoffee, alt: "Iced coffee" },
    { src: espressoPour, alt: "Espresso pour" },
    { src: baristaArt, alt: "Barista latte art" },
  ];

  return (
    <section className="bg-secondary">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group aspect-square"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
