import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import logo from "../../assets/share/logo.jpg";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    id: "1",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/investconnectmarketplace/?viewAsMember=true",
  },
  {
    id: "2",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/profile.php?id=61567537067894&rdid=gRwSRBMQsBM49AJY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KsV32U8yw%2F",
  },
  { id: "3", icon: <FaTwitter />, href: "https://x.com/InvestConnect24" },
  {
    id: "4",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/investconnectmarketplace/?igsh=MjFnY3lheGt3ZXZo",
  },
  { id: "5", icon: <SiBloglovin />, href: "#" },
];

const latestBlogs = [
  {
    id: "1",
    title: "How to Successfully Secure Funding for Your Startup",
    href: "#",
  },
  {
    id: "2",
    title: "The Art of Crafting a Winning Pitch Deck for Entrepreneurs",
    href: "#",
  },
];

const navigationLinks = [
  { title: "Login", href: "/login" },
  { title: "Contact Us", href: "/contact" },
  { title: "About Us", href: "/about-us" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Company Info", href: "/company-info" },
  { title: "Partners", href: "/Partners" },
  { title: "Refer a Friend", href: "/refer-a-friend" },
  { title: "Blog", href: "#" },
];

const entrepreneurLinks = [
  { title: "Add a Pitch", href: "/entrepreneur/register" },
  { title: "Rates", href: "/rates" },
  { title: "Entrepreneur FAQs", href: "/entrepreneurs-faq" },
];

const investorLinks = [
  { title: "Register", href: "/investor/register" },
  { title: "Business Proposal", href: "/business-proposal" },
  { title: "Investor FAQs", href: "/investors-faq" },
];

const serviceProviderLinks = [
  { title: "Services", href: "/investor/services" },
  { title: "Quotes", href: "/investor/services" },
  { title: "Service Providers FAQs", href: "/service-provider-faq" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black pt-20">
      <div className="container mx-auto py-12 px-4">
        <div className="flex w-full flex-wrap items-start gap-3 justify-between border-b border-gray-700 pb-10">
          <div className="flex flex-wrap lg:w-auto w-full items-start lg:justify-start justify-center">
            <div className="flex items-center title-font font-medium gap-5">
              <img src={logo} alt="logo" className="w-[60px] lg:w-[120px]" />
              <div className="lg:w-[600px] font-bold text-2xl lg:text-4xl text-white">
                <h1>INVEST CONNECT</h1>
                <h2 className="italic capitalize text-3xl text-gray-300">
                  Marketplace
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:w-auto w-full sm:mt-0 mt-2 lg:justify-end justify-center items-center">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 hover:bg-gray-300 rounded-full text-lg shadow-md text-black mr-3 flex items-center justify-center transition-all duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:pb-16 pt-16 pb-0 lg:px-0 px-4 lg:text-left text-center mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:mt-0 mt-10">
            <div className="lg:w-1/4 w-full lg:mb-0 mb-24 lg:pr-4">
              <div className="w-full flex-shrink-0 md:mx-0 mx-auto">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Latest Blogs
                </h2>
                <ul className="list-none flex items-center gap-3 flex-col">
                  {latestBlogs.map((blog) => (
                    <li key={blog.id}>
                      <Link
                        className="lg:py-0.5 py-2 block text-lg text-white hover:text-gray-300"
                        to={blog.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-3/4 w-full flex flex-wrap lg:flex-nowrap lg:gap-x-4">
              <div className="w-full">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Navigation
                </h2>
                <ul className="list-none mb-10">
                  {navigationLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        className="lg:py-0.5 py-2 block text-lg text-white hover:text-gray-300"
                        to={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Entrepreneur
                </h2>
                <ul className="list-none mb-10">
                  {entrepreneurLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        className="lg:py-0.5 py-2 block text-lg text-white hover:text-gray-300"
                        to={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Investor
                </h2>
                <ul className="list-none mb-10">
                  {investorLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        className="lg:py-0.5 py-2 block text-lg text-white hover:text-gray-300"
                        to={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Service Providers
                </h2>
                <ul className="list-none mb-10">
                  {serviceProviderLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        className="lg:py-0.5 py-2 block text-lg text-white hover:text-gray-300"
                        to={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-1/2 ml-auto w-full space-y-4 sm:space-y-0 justify-end">
              <form
                onSubmit={handleSubscribe}
                className="w-full flex flex-col sm:flex-row"
              >
                <input
                  className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75 text-black font-bold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
