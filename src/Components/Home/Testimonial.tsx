import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Invest Connect Marketplace allowed me to connect with promising entrepreneurs effortlessly. The platform made discovering and evaluating investment opportunities straightforward and efficient.",
    author: "Natasha Greed",
    role: "Investor",
    image: "https://www.angelinvestmentnetwork.co.uk/media/image/66dea5a376566",
  },
  {
    quote:
      "Through Invest Connect Marketplace, I found the perfect investor match quickly, helping me bring my business vision to life faster than I could have imagined.",
    author: "Rachel Brown",
    role: "Entrepreneur",
    image: "https://www.angelinvestmentnetwork.co.uk/media/image/66dea59f7ae8a",
  },
  {
    quote:
      "Invest Connect Marketplace provides a clear and organized platform that makes reviewing business financials for potential investments seamless. It’s an invaluable tool for anyone supporting investment decision-making.",
    author: "Anthony Norpon",
    role: "Accountant",
    image: "https://www.angelinvestmentnetwork.co.uk/media/image/66dea59f471a0",
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(
        window.innerWidth > 1200 ? 3 : window.innerWidth > 850 ? 2 : 1
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden mx-auto max-w-[1400px] h-[500px] lg:h-[350px]">
          <div
            ref={sliderRef}
            className={`flex transition-transform duration-300 ease-in-out -translate-x-[${
              currentSlide * (100 / slidesToShow)
            }%)] ${testimonials.length * 100}% md:mx-10`}
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
              width: ``,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="px-4"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <figure className="bg-white p-6 rounded-lg shadow-lg relative mb-20">
                  <blockquote className="text-gray-800 text-lg mb-4 relative">
                    {testimonial.quote}
                    <div className="arrow absolute -bottom-[51px] left-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
                  </blockquote>
                  <div className="absolute bottom-[-100px] left-10 flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="text-white">
                      <h5 className=" text-xl font-semibold">
                        {testimonial.author}
                      </h5>
                      <p className=" ">{testimonial.role}</p>
                    </div>
                  </div>
                </figure>
              </div>
            ))}
          </div>
          <div className="">
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-[0px] transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300 mt-5 md:m-0"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-[0px] transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300 mt-5 md:m-0"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
