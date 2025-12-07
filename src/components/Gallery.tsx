const Gallery = () => {
  const images = [
    { src: "/Images/3.jpg", alt: "Gallery image 1" },
    { src: "/Images/4.jpg", alt: "Gallery image 2" },
    { src: "/Images/5.jpg", alt: "Gallery image 3" },
    { src: "/Images/6.jpg", alt: "Gallery image 4" },
    { src: "/Images/7.jpg", alt: "Gallery image 5" },
    { src: "/Images/8.jpg", alt: "Gallery image 6" },
    { src: "/Images/9.jpg", alt: "Gallery image 7" },
    { src: "/Images/10.jpg", alt: "Gallery image 8" },
  ];

  return (
    <section className="bg-cream overflow-hidden reveal-scale">
      <div className="flex animate-scroll">
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 overflow-hidden group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-64 h-64 md:w-80 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
