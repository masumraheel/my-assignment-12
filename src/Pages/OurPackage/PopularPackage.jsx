import usePackages from "../../hooks/usePackages";
import PackageTour from "./PackageTour";

const PopularPackage = () => {
  const [tourPackage] = usePackages();
  const popularTours = tourPackage.filter((tour) => tour.type === "Cultural");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularTours.map((tour) => (
          <PackageTour key={tour._id} tour={tour}></PackageTour>
        ))}
      </div>
    </div>
  );
};

export default PopularPackage;
