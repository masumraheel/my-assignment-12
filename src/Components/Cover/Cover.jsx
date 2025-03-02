const Cover = ({ img, title }) => {
  return (
    <div>
      <div
        className="hero md:h-[720px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 ">
              Discover unforgettable experiences with our curated tours! Whether
              you seek adventure, culture, or relaxation, we have the perfect
              journey for you. Explore breathtaking destinations with expert
              guides and hassle-free planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
