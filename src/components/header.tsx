import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header className="flex items-center justify-between bg-gray-800 py-4 px-6">
      <NavLink to={"/"} className="text-white text-2xl font-bold">Website</NavLink>
      <nav className="space-x-4">
        <NavLink to={"/login"} className="text-white hover:text-gray-300">
          Login
        </NavLink>
        <NavLink to={"/register"} className="text-white hover:text-gray-300">
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
