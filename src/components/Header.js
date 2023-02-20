import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="max-w-2xl mx-auto">
      <nav className="text-right p-2 ">
        <NavLink to="/">
          <button
            type="button"
            className="inline-block px-6 py-2.5 mr-2 bg-transparent text-white font-medium text-xs leading-tight uppercase rounded hover:text-blue-600 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 focus:text-black transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Home
          </button>
        </NavLink>
        <NavLink to="/Contact">
          <button
            type="button"
            className="inline-block px-6 py-2.5 mr-2 bg-transparent text-white font-medium text-xs leading-tight uppercase rounded hover:text-blue-600 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 focus:text-black transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Contact
          </button>
        </NavLink>
        <NavLink to="/About">
          <button
            type="button"
            className="inline-block px-6 py-2.5 mr-2 bg-transparent text-white font-medium text-xs leading-tight uppercase rounded hover:text-blue-600 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 focus:text-black transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            About
          </button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
