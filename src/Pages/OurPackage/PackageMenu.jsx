const PackageMenu = ({ tour }) => {
  const { name, img, price, type } = tour;
  return (
    <div>
      <div className="card bg-base-100 max-w-full shadow-md">
          <img
            src={img}
            alt="image"
            className="rounded-xl h-64"
          />
        <div  className="mt-2">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Type: {type}</p>
          <button className="btn btn-outline border-b-4 mt-2 mb-2
           bg-gradient-to-r from-red-300 via-yellow-500 to-blue-400">View Package</button>
        </div>
      </div>
    </div>
  );
};

export default PackageMenu;
