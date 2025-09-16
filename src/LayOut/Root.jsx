import NavBar from "../Components/NavBar/NavBar.Jsx";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer.jsx";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('logIn') ||location.pathname.includes("signUp");
  return (
    <div>
      {noHeaderFooter ||<NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
