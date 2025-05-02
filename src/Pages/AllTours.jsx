import Cover from "../Components/Cover/Cover";
import tourImage from "../assets/Cover image/cul.jpg";
import usePackages from "../hooks/usePackages";
// import PackageMenu from "./OurPackage/PackageMenu";
import PackageTour from "./OurPackage/PackageTour";

const AllTours = () => {
  const [tourPackage] = usePackages();

  return (
    <div>
      <Cover
        img={tourImage}
        title="Explore Our All Tours"
        Description="Discover unforgettable experiences with our curated tours! Whether
              you seek adventure, culture, or relaxation, we have the perfect
              journey for you. Explore breathtaking destinations with expert
              guides and hassle-free planning."
      ></Cover>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {tourPackage.map((tour) => (
          <PackageTour key={tour._id} tour={tour}></PackageTour>
        ))}
      </div>
    </div>
  );
};

export default AllTours;
