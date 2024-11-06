import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link to='/'
             className="text-xl font-montserrat700">Tax rishi
            </Link>
          </div>
          {/* Hamburger Icon (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-10 font-bold">
      {/* Home Link */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-main flex flex-col items-center"
            : "text-[#000] hover:text-main flex flex-col items-center"
        }
      >
        Home
        {({ isActive }) => isActive && <span className="mt-1">.</span>}
      </NavLink>

      {/* Services Link */}
      <NavLink
        to="/calculator"
        className={({ isActive }) =>
          isActive
            ? "text-main flex flex-col items-center"
            : "text-[#000] hover:text-main flex flex-col items-center"
        }
      >
        Calculators
        {({ isActive }) => isActive && <span className="mt-1">.</span>}
      </NavLink>

      {/* About Link */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-main flex flex-col items-center"
            : "text-[#000] hover:text-main flex flex-col items-center"
        }
      >
        About
        {({ isActive }) => isActive && <span className="mt-1">.</span>}
      </NavLink>

      {/* Contact Link */}
      
      <NavLink
        to="/startup"
        className={({ isActive }) =>
          isActive
            ? "text-main flex flex-col items-center"
            : "text-[#000] hover:text-main flex flex-col items-center"
        }
      >
        Startup Rishi
        {({ isActive }) => isActive && <span className="mt-1">.</span>}
      </NavLink>
      <NavLink
        to="/msme"
        className={({ isActive }) =>
          isActive
            ? "text-main flex flex-col items-center"
            : "text-[#000] hover:text-main flex flex-col items-center"
        }
      >
        Msme Rishi
        {({ isActive }) => isActive && <span className="mt-1">.</span>}
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-main flex flex-col items-center"
            : "text-[#000] hover:text-main flex flex-col items-center"
        }
      >
        Contact
        {({ isActive }) => isActive && <span className="mt-1">.</span>}
      </NavLink>

      {/* Get In Touch Button */}
      <a
        href="#getintouch"
        className="px-4 py-2 bg-main text-white rounded-lg hover:bg-blue-700"
      >
        Get In Touch
      </a>
    </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-6">
          <NavLink to="/" className="block px-4 mb-2 text-[#000] font-bold hover:text-main">
            Home
          </NavLink>
          <NavLink to="/calculator" className="block px-4 py-2 text-[#000] font-bold hover:text-main">
            Calculators
          </NavLink>
          <NavLink to="/about" className="block px-4 py-2 text-[#000] font-bold hover:text-main">
            About
          </NavLink>
          
          <NavLink to="/startup" className="block px-4 py-2 text-[#000] font-bold hover:text-main">
            Startup Rishi
          </NavLink>
          <NavLink to="/msme" className="block px-4 py-2 text-[#000] font-bold hover:text-main">
            Msme Rishi
          </NavLink>
          <NavLink to="/contact" className="block px-4 py-2 text-[#000] font-bold hover:text-main">
            Contact
          </NavLink>
          <a
            href="#getintouch"
            className="flex justify-center items-center px-4 w-[90%] py-2 bg-main text-white hover:bg-blue-700 text-center rounded-lg"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
