import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
        to="/"
      >
        <p className="blue-gradient_text">AH</p>
      </NavLink>
    </header>
  );
};

export default Navbar;
