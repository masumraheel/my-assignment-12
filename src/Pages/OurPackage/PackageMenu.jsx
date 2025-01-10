const PackageMenu = ({ tour }) => {
  const { name, img, price, type } = tour;
  return (
    <div>
      <div className="card bg-slate-100 max-w-full shadow-md bg-transparent">
          <img
            src={img}
            alt="image"
            className="rounded-sm h-64"
          />
        <div  className="mt-2 p-2">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Type: {type}</p>
          <button className="btn btn-outline border-0 border-b-4 mt-2 mb-2 bg-slate-200
           hover:bg-gradient-to-r from-red-400 via-yellow-300 to-emerald-400 hover:text-black">View Package</button>
        </div>
      </div>
    </div>
  );
};

export default PackageMenu;
