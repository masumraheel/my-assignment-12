const Cover = ({ img, title, Description }) => {
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
            <p className="mb-5 ">{Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
