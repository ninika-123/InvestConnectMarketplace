import img from "../../assets/share/logo.jpg";
import { useState, useRef } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { menu } from "../../contest/header";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <header
      ref={headerRef}
      className="z-[2000] py-2 transition-all duration-300 ease-in-out sticky top-0 bg-white shadow-lg "
    >
      <div>
        {" "}
        <div className="container px-5 py-1 mx-auto ">
          <div className="flex justify-between lg:items-center">
            {/* Logo */}
            <div className="flex items-center title-font font-medium gap-5">
              <img src={img} alt="logo" className="w-[100px]" />
              <div className="font-bold text-2xl text-[#ff3636] ">
                <h1>
                  INVEST CONNECT{" "}
                  <span className="italic capitalize ">Marketplace</span>
                  <h2 className="italic capitalize text-2xl"></h2>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex w-[90%] justify-end items-center mr-5">
              <nav className="flex space-x-5 text-base font-bold">
                {menu.map((item) => (
                  <Link to={item.path} key={item.id} className="text-primary">
                    {item.name}
                  </Link>
                ))}

                {/* Action Buttons */}
                <div className="flex gap-4 ">
                  <button
                    className={`bg-primary text-white
                
                px-5 py-1 rounded-lg font-bold text-2xl
              
              `}
                  >
                    Login
                  </button>
                  <button
                    className={`bg-primary text-white  px-5 py-1 rounded-lg font-bold text-2xl`}
                  >
                    Register
                  </button>
                </div>
              </nav>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`xl:hidden ! text-5xl w-[48px] h-[48px] focus:outline-none z-[300]`}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <RiCloseFill className="text-primary" color="red" />
              ) : (
                <MdOutlineMenuOpen className="text-primary" color="red" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {open && (
            <div className="absolute left-0 top-0 w-full h-[500px] z-[210] bg-white text-primary">
              <div className="w-full xl:hidden mt-4">
                <nav className="flex flex-col items-center space-y-4 text-2xl font-bold capitalize">
                  {menu.map((item) => (
                    <Link to={item.path} key={item.id}>
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4 items-center mt-5">
                  <button
                    className={`w-1/2 ${
                      path !== "/"
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    } px-5 py-1 rounded-lg font-bold text-2xl`}
                  >
                    Login
                  </button>
                  <button
                    className={`w-1/2 ${
                      path !== "/"
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    } px-5 py-1 rounded-lg font-bold text-2xl`}
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
