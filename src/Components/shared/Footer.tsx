import { SiBloglovin } from "react-icons/si";
import img from "../../assets/share/logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const links = [
    {
      id: "1",
      icons: <FaLinkedinIn />,
    },
    {
      id: "2",
      icons: <FaFacebookF />,
    },
    {
      id: "3",
      icons: <FaTwitter />,
    },
    {
      id: "4",
      icons: <FaInstagram />,
    },
    {
      id: "5",
      icons: <SiBloglovin />,
    },
  ];
  return (
    <footer className="bg-black pt-20">
      <div className="container mx-auto py-12 px-4">
        <div className="flex w-full flex-wrap items-start gap-3 justify-between border-b border-legacy-footer-border pb-10">
          <div className="flex flex-wrap lg:w-auto w-full items-start lg:justify-start justify-center">
            <div className="flex items-center title-font font-medium gap-5 ">
              <img src={img} alt="logo" className="w-[120px]" />
              <div className={`w-[600px] font-bold text-4xl text-secondary`}>
                <h1>INVEST CONNECT</h1>
                <h2 className="italic capitalize text-3xl"> Marketplace</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:w-auto w-full sm:mt-0 mt-2 lg:justify-end justify-center items-center">
            {links.map((link) => (
              <a
                href="#"
                target="_blank"
                className="bg-white
                p-2
      hover:bg-gray-500
      rounded-full
     text-lg
     shadow-md
      text-primary
      mr-3
      leading-loose
      flex
      items-center
      justify-center
      transition-all
      duration-300
  "
              >
                {link.icons}
              </a>
            ))}{" "}
          </div>
          {/*  */}
        </div>
        <div
          className="
              lg:pb-16
              pt-16
              pb-0
              lg:px-0
              px-4
              lg:text-left
              text-center
              mx-auto
              md:items-center
              lg:items-start
              md:flex-row
              md:flex-nowrap
              flex-wrap
              flex-col
          "
        >
          <div className="flex-grow flex flex-wrap md:mt-0 mt-10">
            <div className="lg:w-1/4 w-full lg:mb-0 mb-24 lg:pr-4">
              <div className="w-full flex-shrink-0 md:mx-0 mx-auto">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Latest Blogs{" "}
                </h2>
                <ul className="list-none flex items-center gap-3 flex-col ">
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="#"
                      target="_blank"
                    >
                      How to Successfully Secure Funding for Your Startup
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="#"
                      target="_blank"
                    >
                      The Art of Crafting a Winning Pitch Deck for Entrepreneurs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-3/4 w-full flex flex-wrap lg:flex-nowrap lg:gap-x-4">
              <div className="w-full">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Navigation{" "}
                </h2>
                <ul className="list-none mb-10">
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/login"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/about-us"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/testimonials"
                    >
                      Testimonials
                    </a>
                  </li>

                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/company-info"
                    >
                      Company Info
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/Partners"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/refer-a-friend"
                    >
                      Refer a Friend
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href=""
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Entrepreneur{" "}
                </h2>
                <ul className="list-none mb-10">
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/entrepreneur/register"
                    >
                      Add a Pitch
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/rates"
                    >
                      Rates
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/entrepreneurs-faq"
                    >
                      Entrepreneur FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Investor
                </h2>
                <ul className="list-none mb-10">
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/investor/register"
                    >
                      Register
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/business-proposal"
                    >
                      Business Proposal
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/investors-faq"
                    >
                      Investor FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <h2 className="font-medium text-white tracking-normal text-3xl mb-6">
                  Service Providers
                </h2>
                <ul className="list-none mb-10">
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/investor/services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/investor/services"
                    >
                      Quotes
                    </a>
                  </li>
                  <li>
                    <a
                      className="
              lg:py-0.5
              py-2
              block
                                    text-lg
                text-white
                                  hover:text-gray-300
          "
                      href="/service-provider-faq"
                    >
                      Service Providers FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-1/2 ml-auto w-full space-y-4 sm:space-y-0 justify-end  ">
              <input
                className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                placeholder="Email Address"
              />
              <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75 text-primary font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto px-4 grid md:grid-cols-2  lg:justify-between lg:items-center lg:gap-0 gap-5 text-white">
          {/* <ul className="flex lg:flex-row lg:w-3/4 flex-col items-center gap-x-3 list-none">
            <li>
              <a
                className="
              lg:py-0.5
              py-2
              block
                                    text-xs text-legacy-footer-link
                                  hover:text-gray-300
          "
                href="/terms-and-conditions"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                className="
              lg:py-0.5
              py-2
              block
                                    text-xs text-legacy-footer-link
                                  hover:text-gray-300
          "
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="
              lg:py-0.5
              py-2
              block
                                    text-xs text-legacy-footer-link
                                  hover:text-gray-300
          "
                href="/sitemap"
              >
                Site Map
              </a>
            </li>
            <li>
              <a
                className="
              lg:py-0.5
              py-2
              block
                                    text-xs text-legacy-footer-link
                                  hover:text-gray-300
          "
                href="/refunds"
              >
                Refunds
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}
