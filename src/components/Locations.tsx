const locations = [
  {
    city: "Brussels",
    address: "Rue du Midi 45, 1000",
    region: "Bruxelles, Belgium",
  },
  {
    city: "Anderlecht",
    address: "Pl. De Linde 27, 1070",
    region: "Anderlecht, Belgium",
  },
  {
    city: "Machelen",
    address: "Dorpsplein 2, 1830",
    region: "Machelen, Belgium",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-24" style={{ backgroundColor: "#252224" }}>
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-5xl text-center text-cream mb-16">
          Locations
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="text-center">
              <h3 className="font-heading text-xl text-cream mb-3">
                {location.city}
              </h3>
              <p className="text-cream/70 text-sm">{location.address}</p>
              <p className="text-cream/70 text-sm">{location.region}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
