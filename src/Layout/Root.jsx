import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";

const Root = () => {
  return (
    <div className="mx-32">
      <Navbar/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
