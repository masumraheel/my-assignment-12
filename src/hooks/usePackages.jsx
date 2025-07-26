import { useEffect, useState } from "react";

const usePackages = () => {
  const [tourPackage, setPackage] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/tourData")
      .then((res) => res.json())
      .then((data) => {
        setPackage(data);
        setLoading(false);
      });
  }, []);
  return [tourPackage, loading];
};
export default usePackages;
