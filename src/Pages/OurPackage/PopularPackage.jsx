import PackageMenu from "./PackageMenu";
import usePackages from "../../hooks/usePackages";

const PopularPackage = () => {
  const [tourPackage] = usePackages();
  const popularTours = tourPackage.filter((tour) => tour.type === "Cultural");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularTours.map((tour) => (
          <PackageMenu key={tour._id} tour={tour}></PackageMenu>
        ))}
      </div>
    </div>
  );
};

export default PopularPackage;
