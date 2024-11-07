import { useState, useRef, useEffect } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/share/logo.jpg";
import { menu } from "../../contest/header";
// // Assuming this is how your menu is structured
// const menu = [
//   { id: 1, name: "Home", path: "/" },
//   { id: 2, name: "About", path: "/about" },
//   { id: 3, name: "Services", path: "/services" },
//   { id: 4, name: "Contact", path: "/contact" },
// ];

const Header = () => {
  const path = useLocation().pathname;
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`z-50 py-2 transition-all duration-300 ease-in-out sticky top-0 bg-white ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <img src={logo} alt="logo" className="w-12 h-12 sm:w-16 sm:h-16" />
            <div className="font-bold text-lg sm:text-2xl text-[#ff3636]">
              <h1>
                INVEST CONNECT{" "}
                <span className="italic capitalize block text-sm sm:text-base">
                  Marketplace
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-4 text-sm font-bold">
              {menu.map((item) => (
                <Link
                  to={item.path}
                  key={item.id}
                  className="text-primary capitalize hover:text-[#ff3636] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex space-x-3">
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#ff3636] transition-colors">
                Login
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#ff3636] transition-colors">
                Register
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-3xl focus:outline-none z-50 px-5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <RiCloseFill className="text-primary" />
            ) : (
              <MdOutlineMenuOpen className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 bg-white transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <nav className="flex flex-col items-center space-y-6 text-xl font-bold capitalize">
              {menu.map((item) => (
                <Link
                  to={item.path}
                  key={item.id}
                  className="text-primary hover:text-[#ff3636] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-4 mt-8">
              <button
                className={`w-48 ${
                  path !== "/"
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary"
                } px-5 py-2 rounded-lg font-bold text-lg hover:bg-[#ff3636] hover:text-white transition-colors`}
              >
                Login
              </button>
              <button
                className={`w-48 ${
                  path !== "/"
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary"
                } px-5 py-2 rounded-lg font-bold text-lg hover:bg-[#ff3636] hover:text-white transition-colors`}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
