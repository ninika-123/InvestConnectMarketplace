import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdMarkEmailRead } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";

const ContactForm: React.FC = () => {
  const links = [
    {
      id: "1",
      icons: <FaLinkedinIn />,
    },
    {
      id: "4",
      icons: <FaInstagram />,
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
      id: "5",
      icons: <SiBloglovin />,
    },
  ];
  return (
    <div className=" bg-white ">
      {" "}
      <div className="">
        {" "}
        <div className="relative">
          {" "}
          <div className="  bg-primary p-6 ">
            <div className=" container overflow-hidden ">
              {/* Left Section */}
              <div className="p-12 text-white md:p-16 w-full lg:w-1/2 ">
                <h1 className="font-bold text-[40px] leading-[48px]">
                  Get In Touch
                </h1>
                <p className="mt-4 text-[24px] font-medium leading-[24px] text-white/90">
                  Feel free to contact us? submit your queries here and we will
                  get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="p-6 md:p-12 absolute  right-0 top-0">
            <div className="rounded-[24px] bg-white p-8 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)] w-[700px] h-[500px]">
              <h2 className="mb-8 text-[24px] font-medium leading-[32px] text-[#1A1A1A]">
                Send Us Message
              </h2>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-12 w-full rounded-[12px] border border-[#E5E7EB] bg-white px-4 text-[16px] outline-none placeholder:text-[#6B7280] focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 w-full rounded-[12px] border border-[#E5E7EB] bg-white px-4 text-[16px] outline-none placeholder:text-[#6B7280] focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="h-12 w-full rounded-[12px] border border-[#E5E7EB] bg-white px-4 text-[16px] outline-none placeholder:text-[#6B7280] focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <textarea
                  placeholder="write a message"
                  className="h-24 w-full rounded-[12px] border border-[#E5E7EB] bg-white px-4 text-[16px] outline-none placeholder:text-[#6B7280] focus:border-primary focus:ring-2 focus:ring-primary/20 p-2"
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="h-12 w-1/3 rounded-[12px] bg-primary text-[16px] font-medium text-white transition-colors hover:bg-[#5849E6] focus:outline-none focus:ring-2 focus:ring-primary/20 text-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-black  container p-6 ">
          <div className="p-12">
            <div className=" space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex  items-center">
                  <MdMarkEmailRead size={25} />
                </div>
                <span className="text-lg font-normal">
                  info@investconnectmarketplace.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 items-center">
                  <ImLocation2 size={25} />
                </div>
                <span className="text-lg font-normal">
                  office address 128 City Road, London, United Kingdom, EC1V 2NX
                </span>
              </div>
            </div>
            <div className="mt-16 flex gap-4">
              {/* <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4683 0H1.53167C0.685833 0 0 0.685833 0 1.53167V18.4683C0 19.3142 0.685833 20 1.53167 20H18.4683C19.3142 20 20 19.3142 20 18.4683V1.53167C20 0.685833 19.3142 0 18.4683 0ZM6.025 17.0833H3.18333V7.63333H6.025V17.0833ZM4.60417 6.375C3.70833 6.375 2.98333 5.64167 2.98333 4.75417C2.98333 3.86667 3.70833 3.13333 4.60417 3.13333C5.49167 3.13333 6.225 3.86667 6.225 4.75417C6.225 5.64167 5.49167 6.375 4.60417 6.375ZM17.0833 17.0833H14.2417V12.4333C14.2417 11.3583 14.2167 9.96667 12.7333 9.96667C11.225 9.96667 10.9917 11.1583 10.9917 12.3917V17.0833H8.15V7.63333H10.875V8.89167H10.9167C11.3417 8.15833 12.2833 7.38333 13.7 7.38333C16.575 7.38333 17.0833 9.31667 17.0833 11.825V17.0833Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.610714 2.78649 1.69844 1.69844C2.78616 0.610714 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                    fill="black"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 0.958984H18.9583L11.2667 9.62565L20 20.0007H13.8333L8.39167 13.779L2.20833 20.0007H-0.416667L7.75833 10.779L-0.625 0.958984H5.70833L10.6833  6.66732L15.75 0.958984ZM14.6583 18.0423H16.3333L4.45833 2.83398H2.66667L14.6583 18.0423Z"
                    fill="black"
                  />
                </svg>
              </a> */}
              {links.map((link) => (
                <a
                  href="#"
                  target="_blank"
                  className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20 text-4xl"
                >
                  {link.icons}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
