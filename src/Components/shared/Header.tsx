import img from "../../assets/share/logo.jpg";
import { useEffect, useState, useRef } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { menu } from "../../contest/header";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  console.log(path);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const handleScroll = () => {
      if (!window) return;

      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`z-[2000] py-2 transition-all duration-300 ease-in-out sticky top-0  ${
        path === "/" && active
          ? "bg-white shadow-lg "
          : "bg-transparent -mt-[150px] "
      } 
      ${path !== "/" && "mt-[0px] bg-white shadow-lg"}
      `}
    >
      <div className="container px-5 py-1 mx-auto ">
        <div className="flex justify-between lg:items-center">
          {/* Logo */}
          <div className="flex items-center title-font font-medium gap-5 ">
            <img src={img} alt="logo" className="w-[120px]" />
            <div
              className={`w-[600px] font-bold text-4xl  ${
                active ? "text-primary" : "text-secondary"
              }
              ${path !== "/" && "!text-primary"}
              `}
            >
              <h1>INVEST CONNECT</h1>
              <h2 className="italic capitalize text-3xl"> Marketplace</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex  w-[90%] justify-end items-center">
            <nav className="flex space-x-5 text-base">
              {menu.map((item) => (
                <Link
                  to={item.path}
                  key={item.id}
                  className={`${
                    active ? " text-primary  font-bold" : "text-white"
                  }  ${
                    path !== "/" && "!text-primary"
                  }  font-bold text-2xl capitalize`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4">
              <button
                className={` ${path !== "/" && "!bg-primary text-white"} ${
                  active ? "bg-primary text-secondary" : "bg-white text-primary"
                } px-5 py-1  ml-5 rounded-lg font-bold text-2xl`}
              >
                Login
              </button>
              <button
                className={` ${path !== "/" && "!bg-primary text-white"} ${
                  active ? "bg-primary text-secondary" : "bg-white text-primary"
                } px-5 py-1  ml-5 rounded-lg font-bold text-2xl`}
              >
                Register
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`xl:hidden ${path !== "/" && "!bg-primary text-white"} ${
              active ? "bg-primary text-secondary" : "bg-white text-primary"
            }  text-5xl relative z-[250] w-[48px] h-[48px] focus:outline-none`}
            onClick={() => setOpen(!open)}
          >
            {open ? <RiCloseFill /> : <MdOutlineMenuOpen />}
          </button>

          {/* Mobile Navigation */}
          {open && (
            <div className="absolute left-0 top-0 w-full h-[500px] z-[210] bg-white text-primary">
              <div className="w-full xl:hidden mt-4">
                <nav className="flex flex-col items-center space-y-4 text-base">
                  {menu.map((item) => (
                    <Link
                      to={item.path}
                      key={item.id}
                      className="text-2xl font-bold capitalize"
                    >
                      {item.name}
                    </Link>
                  ))}{" "}
                </nav>
                <div className="flex flex-col gap-4 items-center mt-5">
                  <button
                    className={`w-1/2 ${
                      path !== "/" && "!bg-primary text-white"
                    } ${
                      active
                        ? "bg-primary text-secondary"
                        : "bg-white text-primary"
                    } px-5 py-1  ml-5 rounded-lg font-bold text-2xl`}
                  >
                    Login
                  </button>
                  <button
                    className={`w-1/2 ${
                      path !== "/" && "!bg-primary text-white"
                    } ${
                      active
                        ? "bg-primary text-secondary"
                        : "bg-white text-primary"
                    } px-5 py-1  ml-5 rounded-lg font-bold text-2xl`}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
