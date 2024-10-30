import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import img from "../../assets/share/investor1.jpg";

const defaultPitchDecks = [
  {
    id: 1,
    name: "Renda",
    location: "London, United Kingdom",
    description:
      "Renda is an AI-enabled online bathroom showroom, disrupting a £13bn European industry that has struggled since 2018 as modern consumers have moved online.",
    metrics: [
      "£350k bathroom product revenue since launch",
      "AI-enabled showroom with 15,000+ bathroom SKUs available to consumers",
      "Supplier relationships in place with leading manufacturers",
    ],
    funding: { raised: "£300,000", seeking: "£5,000" },
    image: img,
  },

  {
    id: 2,
    name: "Renda",
    location: "London, United Kingdom",
    description:
      "Renda is an AI-enabled online bathroom showroom, disrupting a £13bn European industry that has struggled since 2018 as modern consumers have moved online.",
    metrics: [
      "£350k bathroom product revenue since launch",
      "AI-enabled showroom with 15,000+ bathroom SKUs available to consumers",
      "Supplier relationships in place with leading manufacturers",
    ],
    funding: { raised: "£300,000", seeking: "£5,000" },
    image: img,
  },

  {
    id: 3,
    name: "Renda",
    location: "London, United Kingdom",
    description:
      "Renda is an AI-enabled online bathroom showroom, disrupting a £13bn European industry that has struggled since 2018 as modern consumers have moved online.",
    metrics: [
      "£350k bathroom product revenue since launch",
      "AI-enabled showroom with 15,000+ bathroom SKUs available to consumers",
      "Supplier relationships in place with leading manufacturers",
    ],
    funding: { raised: "£300,000", seeking: "£5,000" },
    image: img,
  },

  {
    id: 4,
    name: "Renda",
    location: "London, United Kingdom",
    description:
      "Renda is an AI-enabled online bathroom showroom, disrupting a £13bn European industry that has struggled since 2018 as modern consumers have moved online.",
    metrics: [
      "£350k bathroom product revenue since launch",
      "AI-enabled showroom with 15,000+ bathroom SKUs available to consumers",
      "Supplier relationships in place with leading manufacturers",
    ],
    funding: { raised: "£300,000", seeking: "£5,000" },
    image: img,
  },
  // Add more pitch decks as needed
];

export default function InvestorPitchDeckShowcase({
  pitchDecks = defaultPitchDecks,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const decksPerPage = 3;

  // Autoplay and infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + decksPerPage) % pitchDecks.length);
    }, 3000); // 3 seconds delay for autoplay
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [pitchDecks.length]);

  const nextDecks = () =>
    setCurrentIndex((prev) => (prev + decksPerPage) % pitchDecks.length);
  const prevDecks = () =>
    setCurrentIndex(
      (prev) => (prev - decksPerPage + pitchDecks.length) % pitchDecks.length,
    );

  const currentDecks = [...pitchDecks, ...pitchDecks] // Duplicate to simulate infinity
    .slice(currentIndex, currentIndex + decksPerPage);

  return (
    <section className="bg-gradient-to-br from-primary to-red-700 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center -mt-5 pb-10">
          Exploring Investment Opportunities in the UK?
        </h2>
        <p className="text-3xl text-center mb-12">
          Explore curated UK pitch decks from promising entrepreneurs, poised to
          make a lasting impact
        </p>

        <div className="grid md:grid-cols-3 gap-8 transition-transform duration-500 ease-in-out">
          {currentDecks.map((deck, idx) => (
            <div
              key={idx} // Changed to index to handle duplicated items
              className="relative bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
              <div className="p-6">
                <img
                  src={deck.image}
                  alt={deck.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{deck.name}</h3>
                <p className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {deck.location}
                </p>
                <p className="text-sm mb-4">{deck.description}</p>
                <h4 className="text-lg font-semibold mb-3">Key Metrics</h4>
                <ul className="list-disc list-inside mb-6">
                  {deck.metrics.map((metric, index) => (
                    <li key={index} className="mb-2">
                      {metric}
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total Raised:</span>
                    <span className="text-green-600">
                      {deck.funding.raised}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Seeking:</span>
                    <span className="text-blue-600">
                      {deck.funding.seeking}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {" "}
                  <button className="inline-block mx-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-6 transition duration-300 text-2xl">
                    View Full Pitch Deck
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevDecks}
            className="bg-white text-red-600 hover:bg-red-100 p-2 rounded-full transition duration-300"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={nextDecks}
            className="bg-white text-red-600 hover:bg-red-100 p-2 rounded-full transition duration-300"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>

        <p className="text-center mt-12 text-3xl">
          Browse innovative business ideas, startups, and funding needs from
          entrepreneurs across the UK
        </p>
        <div className="text-center mt-6">
          <button className="bg-white text-red-600 hover:bg-red-100 font-bold py-3 px-8 rounded-full text-3xl transition duration-300">
            Browse Pitch Decks
          </button>
        </div>
      </div>
    </section>
  );
}
