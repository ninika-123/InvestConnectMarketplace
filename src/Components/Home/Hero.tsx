import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Dropdown } from "./Dropdown";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-red-700 ">
      <div className="container mx-auto   relative z-20 text-white">
        <div className="grid md:grid-cols-2 gap-32  px-5 py-52 ">
          <div className="lg:flex-grow    flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-[35px] mr-5 text-3xl  font-bold leading-[45px]">
              We Connect UK Entrepreneurs,
              <br className="hidden lg:inline-block" />
              Angel Investors, & Professional Service Providers
            </h1>
            <p className="my-8 leading-relaxed text-2xl ">
              Invest Connect Marketplace is a fintech platform uniting
              investors, entrepreneurs, and service providers in a collaborative
              ecosystem. Here, investors find opportunities, business owners
              secure funding, and professionals offer essential services,
              driving growth and success in one dynamic marketplace.
            </p>
            {/* <div className="flex justify-center">
            <Button className="  border-0 py-2 px-6  rounded text-lg">
              Get Started
            </Button>
          </div> */}

            {/*im looking to*/}
            <div className="flex items-center gap-5 mt-16 ">
              <p className="text-3xl">I am looking to</p>
              <Dropdown />
            </div>
          </div>
          <div className=" lg:w-full h-[400px]">
            <span className="text-white mt-16 italic py-5 flex  ">
              <FaQuoteLeft />
              <p className="text-[30px] mb-16 ">
                Invest with Purpose, Connect with Success
              </p>
              <FaQuoteRight />
            </span>
            {/* YouTube Video Embed */}
            <div className="w-full  px-4 h-full bg-white p-5">
              <div className="relative w-full h-full">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace YOUR_VIDEO_ID with the actual video ID
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
