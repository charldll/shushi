import { Link } from "react-router";
import Logo from "./Logo"
const Navbar = () => {
  return (
    <nav className="bg-pink-200 text-black p-4 flex justify-between">
      <Link to={"/"}><Logo /></Link>
      <ul className="flex gap-4">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/kitchen">Kitchen</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;