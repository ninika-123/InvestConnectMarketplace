import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/shared/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
