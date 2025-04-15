import { useEffect, useState } from "react";

const usePackages = () => {
  const [tourPackage, setPackage] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("tourData.json")
      .then((res) => res.json())
      .then((data) => {
        setPackage(data);
        setLoading(false);
      });
  }, []);
  return [tourPackage, loading];
};
export default usePackages;
