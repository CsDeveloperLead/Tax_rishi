import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Keeps track of the active dropdown
  const startupRef = useRef(null);
  const msmeRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleAccordion2 = () => {
    setIsExpanded2((prev) => !prev);
  };

  const toggleDropdown = (dropdown) => {
    // Toggle the dropdown or close if clicked again
    setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
  };

  const handleClickOutside = (event) => {
    // Check if the click was outside both dropdown menus
    if (
      startupRef.current &&
      !startupRef.current.contains(event.target) &&
      msmeRef.current &&
      !msmeRef.current.contains(event.target)
    ) {
      setActiveDropdown(null); // Close both dropdowns
    }
  };

  useEffect(() => {
    // Add event listener for outside click
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="bg-white shadow-md font-montserrat">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to='/'
              className="text-xl font-montserrat700">
              <img src={Logo} alt="Logo" className="w-20 h-20" />

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
          <div className="hidden md:flex md:items-center space-x-10 text-sm font-bold">
            {/* Home Link */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-main flex flex-col items-center"
                  : "text-[#14598D] hover:text-main flex flex-col items-center"
              }
            >
              Home
              {({ isActive }) => isActive && <span className="mt-1">.</span>}
            </NavLink>

            <div className="relative" ref={startupRef}>
              <NavLink
                onMouseEnter={() => setActiveDropdown("startup")}
                to="/startup/registration"
                className={({ isActive }) =>
                  isActive
                    ? " flex flex-col text-main hover:text-main items-center cursor-pointer"
                    : "text-[#14598D] hover:text-main flex flex-col items-center cursor-pointer"
                }
                onClick={() => toggleDropdown("startup")}
              >
                StartupRishi
                {({ isActive }) => isActive && <span className="mt-1">.</span>}
              </NavLink>
              {activeDropdown === "startup" && (
                <div onClick={() => setActiveDropdown(null)} className="absolute top-full mt-4 -left-16 bg-white border rounded shadow-lg z-50 w-[250px]">
                  <NavLink to="/startup/registration" className="block px-4 py-2 hover:bg-gray-100">Registration Process</NavLink>
                  <NavLink to="/startup/benefits" className="block px-4 py-2 hover:bg-gray-100">Benefits</NavLink>
                  <NavLink to="/startup/funding" className="block px-4 py-2 hover:bg-gray-100">Startup Funding</NavLink>
                  <NavLink to="/startup/tax" className="block px-4 py-2 hover:bg-gray-100">Tax Exemption Eligibility</NavLink>
                </div>
              )}
            </div>

            {/* Msme Dropdown */}
            <div className="relative" ref={msmeRef}>
              <NavLink
                onMouseEnter={() => setActiveDropdown("msme")}
                to="/msme/registration"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col  text-main hover:text-main items-center cursor-pointer"
                    : "text-[#14598D] hover:text-main flex flex-col items-center cursor-pointer"
                }
                onClick={() => toggleDropdown("msme")}
              >
                MsmeRishi
                {({ isActive }) => isActive && <span className="mt-1">.</span>}
              </NavLink>
              {activeDropdown === "msme" && (
                <div onClick={() => setActiveDropdown(null)} className="absolute top-full mt-4 -left-16 bg-white border rounded shadow-lg z-50 w-[250px]">
                  <NavLink to="/msme/registration" className="block px-4 py-2 hover:bg-gray-100">Registration Process</NavLink>
                  <NavLink to="/msme/document" className="block px-4 py-2 hover:bg-gray-100">Document Required</NavLink>
                  <NavLink to="/msme/scheme" className="block px-4 py-2 hover:bg-gray-100">MSME Scheme</NavLink>
                  <NavLink to="/msme/gst" className="block px-4 py-2 hover:bg-gray-100">New GST Exemption</NavLink>
                </div>
              )}
            </div>

            {/* Services Link */}
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                isActive
                  ? "text-main flex flex-col items-center"
                  : "text-[#14598D] hover:text-main flex flex-col items-center"
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
                  : "text-[#14598D] hover:text-main flex flex-col items-center"
              }
            >
              About Us
              {({ isActive }) => isActive && <span className="mt-1">.</span>}
            </NavLink>

            {/* Blog Link */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-main flex flex-col items-center"
                  : "text-[#14598D] hover:text-main flex flex-col items-center"
              }
            >
              Blogs
              {({ isActive }) => isActive && <span className="mt-1">.</span>}
            </NavLink>

            {/* Contact Link */}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-main flex flex-col items-center"
                  : "text-[#14598D] hover:text-main flex flex-col items-center"
              }
            >
              Contact Us
              {({ isActive }) => isActive && <span className="mt-1">.</span>}
            </NavLink>

            {/* Gstrishi */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-main flex flex-col items-center"
                  : "text-[#14598D] hover:text-main flex flex-col items-center"
              }
            >
              GstRishi
              {({ isActive }) => isActive && <span className="mt-1">.</span>}
            </NavLink>
            
            {/* Tax rishi foundation */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-main flex flex-col items-center"
                  : "text-[#14598D] hover:text-main flex flex-col items-center"
              }
            >
              TaxRishi Foundation
              {({ isActive }) => isActive && <span className="mt-1">.</span>}
            </NavLink>

            {/* Get In Touch Button */}
            <Link
              to='https://wa.link/ponzo9'
              className="px-4 py-2 bg-main text-white rounded-lg hover:bg-green-700"
            >
              Get In Touch
            </Link>
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
          <NavLink to="/blog" className="block px-4 py-2 text-[#000] font-bold hover:text-main">
            Blogs
          </NavLink>
          <NavLink to="/" className="block px-4 py-2 text-[#000] font-bold hover:text-main">
            GstRishi
          </NavLink>
          <NavLink to="/" className="block px-4 py-2 text-[#000] font-bold hover:text-main">
            TaxRishi Foundation
          </NavLink>

          <div className="w-full flex flex-col items-center">
            {/* Accordion Header */}
            <div
              onClick={toggleAccordion}
              className="cursor-pointer py-2 text-[#000] font-bold hover:text-main flex flex-col items-center"
            >
              <span>Startup Rishi</span>
              <span>{isExpanded ? "" : ""}</span> {/* Icon toggles between up and down */}
            </div>

            {/* Accordion Content */}
            {isExpanded && (
              <div className="flex flex-col items-center ">
                <NavLink
                  to="/startup/registration"
                  className="block px-4 py-2 text-[#000] font-bold hover:text-main"
                >
                  Startup Registration
                </NavLink>
                <NavLink
                  to="/startup/benefits"
                  className="block px-4 py-2 text-[#000] font-bold hover:text-main"
                >
                  Startup Benefits
                </NavLink>
                <NavLink
                  to="/startup/funding"
                  className="block px-4 py-2 text-[#000] font-bold hover:text-main"
                >
                  Startup Funding
                </NavLink>
                <NavLink
                  to="/startup/tax"
                  className="block px-4 py-2 text-[#000] font-bold hover:text-main"
                >
                  Startup Tax Exemption
                </NavLink>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col items-center">
            {/* Accordion Header */}
            <div
              onClick={toggleAccordion2}
              className="cursor-pointer py-2 text-[#000] font-bold hover:text-main flex flex-col items-center"
            >
              <span>Msme Rishi</span>
              <span>{isExpanded ? "" : ""}</span> {/* Icon toggles between up and down */}
            </div>

            {/* Accordion Content */}
            {isExpanded2 && (
              <div className="flex flex-col items-center ">
                <NavLink
                  to="/msme/registration"
                  className="block px-4 py-2 text-[#000] font-bold hover:text-main"
                >
                  Msme Registration
                </NavLink>
                <NavLink
                  to="/msme/document"
                  className="block px-4 py-2 text-[#000] font-bold hover:text-main"
                >
                  Msme Documents
                </NavLink>
                <NavLink
                  to="/msme/scheme"
                  className="block px-4 py-2 text-[#000] font-bold hover:text-main"
                >
                  Msme Schemes
                </NavLink>
                <NavLink
                  to="/msme/gst"
                  className="block px-4 py-2 text-[#000] font-bold hover:text-main"
                >
                  Msme Gst Exemption
                </NavLink>
              </div>
            )}
          </div>
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
