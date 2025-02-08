import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "../routes/About";
const Layout = () => {
  console.log("dsa");
  return (
    <div>
      <Navbar />
      <Outlet />
      <About />
      <Footer />
    </div>
  );
};

export default Layout;
