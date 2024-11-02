import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Dropdown } from "./Dropdown";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-red-700 ">
      <div className="container mx-auto relative z-20 text-white  px-5 py-40">
        <h1 className="title-font sm:text-[35px] mr-5 md:text-5xl font-bold  mb-5 ">
          We Connect UK Entrepreneurs, Angel Investors, & Professional Service
          Providers
        </h1>
        <div className="grid lg:grid-cols-2 gap-32">
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="my-8 leading-relaxed text-2xl">
              Invest Connect Marketplace is a fintech platform uniting
              investors, entrepreneurs, and service providers in a collaborative
              ecosystem. Here, investors find opportunities, business owners
              secure funding, and professionals offer essential services,
              driving growth and success in one dynamic marketplace.
            </p>
            <div className="flex flex-col items-center gap-5 mt-7">
              <p className="text-3xl">I am looking to</p>
              <Dropdown />
            </div>
          </div>
          <div className="w-full h-full ">
            <span className="text-white mt-16 italic pb-5 flex">
              <FaQuoteLeft />
              <p className="text-[30px] mb-16">
                Invest with Purpose, Connect for Success
              </p>
              <FaQuoteRight />
            </span>
            {/* "Coming Soon" Placeholder */}
            <div className="w-full px-4 h-[400px] bg-white p-5 flex items-center justify-center rounded-xl">
              <p className="text-2xl font-semibold text-gray-700 italic">
                Video Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
