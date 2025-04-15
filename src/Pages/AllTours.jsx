import Cover from "../Components/Cover/Cover";
import tourImage from "../assets/Cover image/cul.jpg";
import usePackages from "../hooks/usePackages";
import PackageMenu from "./OurPackage/PackageMenu";

const AllTours = () => {
    const [tourPackage] = usePackages();

  return (
    <div>
      <Cover img={tourImage} title="Explore Our All Tours"></Cover>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {tourPackage.map((tour) => (
          <PackageMenu key={tour._id} tour={tour}></PackageMenu>
        ))}
      </div>
    </div>
  );
};

export default AllTours;
