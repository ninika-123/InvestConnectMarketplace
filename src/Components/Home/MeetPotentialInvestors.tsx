import investor from "../../assets/MeetPotentialInvestors/investor.jpg";
import { useState } from "react";
import { MapPin, Briefcase, TrendingUp, DollarSign, X } from "lucide-react";

const investors = [
  {
    id: 1,
    name: "Richard M.",
    location: "London, United Kingdom",
    image: investor,
    investmentRange: "£0 - £100,000",
    background:
      "20+ years in private equity, then an operator (CEO, Chair and NED).",
    expertise: [
      "Branded Consumer Businesses",
      "Strategy",
      "Growth",
      "Corporate Finance",
      "Governance",
    ],
  },
  {
    id: 2,
    name: "Sarah L.",
    location: "Manchester, United Kingdom",
    image: investor,
    investmentRange: "£50,000 - £250,000",
    background:
      "15+ years in tech startups, serial entrepreneur, and angel investor.",
    expertise: [
      "SaaS",
      "AI/ML",
      "E-commerce",
      "Product Development",
      "Scaling",
    ],
  },
  {
    id: 3,
    name: "James K.",
    location: "Edinburgh, United Kingdom",
    image: investor,
    investmentRange: "£25,000 - £150,000",
    background: "18+ years in fintech, former CTO, and active angel investor.",
    expertise: [
      "Fintech",
      "Blockchain",
      "Cybersecurity",
      "Software Architecture",
      "Team Building",
    ],
  },
];

export default function MeetPotentialInvestors() {
  const [activeInvestor, setActiveInvestor] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-br from-primary to-red-700 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">
          Meet Potential Investors
        </h2>
        <p className="text-2xl text-center mb-12">
          Discover curated UK investors ready to fuel your entrepreneurial
          journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investors.map((investor) => (
            <div
              key={investor.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={investor.image}
                  alt={investor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">
                    {investor.name}
                  </h3>
                  <p className="text-sm text-gray-300 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {investor.location}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700 font-semibold">
                    {investor.investmentRange}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{investor.background}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {investor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setActiveInvestor(investor.id)}
                  className="mt-6 inline-block mx-auto bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 flex items-center justify-center text-xl"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-3xl mb-8 italic">
            "Connect with thousands of investors ready to shape your idea and
            fuel your growth."
          </p>
          <button className="bg-white text-red-600 hover:bg-red-100 font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore All Investor Profiles
          </button>
        </div>
      </div>

      {activeInvestor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setActiveInvestor(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center mb-6">
              <img
                src={investors.find((i) => i.id === activeInvestor)?.image}
                alt={investors.find((i) => i.id === activeInvestor)?.name}
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">
                  {investors.find((i) => i.id === activeInvestor)?.name}
                </h3>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {investors.find((i) => i.id === activeInvestor)?.location}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                {investors.find((i) => i.id === activeInvestor)?.background}
              </p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Investment Range
                </h4>
                <p className="text-gray-600">
                  {
                    investors.find((i) => i.id === activeInvestor)
                      ?.investmentRange
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {investors
                    .find((i) => i.id === activeInvestor)
                    ?.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
