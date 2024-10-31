import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import img from "../../assets/share/investor1.jpg";

const defaultPitchDecks = [
  {
    id: 1,
    name: "Gyral Psychology Model",
    location: "W. Midlands, United Kingdom",
    description:
      "The Gyral Psychology Model is already deployed supporting mental health conversations with plans to scale into corporate psychological health, performance and productivity. Join us as we grow within - a 2030 $8BN SOM (22% CAGR) in a $93BN TAM.",
    metrics: [
      "Ground-breaking Psychology Model enriching human-computer interactions",
      "Over 100 defensible trade secret assets",
      "15x ROI within 4 years",
    ],
    funding: { raised: "£150,000", seeking: "£5,000" },
    image: "https://www.angelinvestmentnetwork.co.uk/media/image/671a43e98f278",
  },

  {
    id: 2,
    name: "Haatch EIS Fund",
    location: "East Midlands, United Kingdom",
    description:
      "Haatch EIS Fund is an award-winning Fund offering deployment into 4-6 companies, focused on seed-stage B2B SaaS businesses that have defined customer profile, are solving real pain points and are doing a minimum of £10k Monthly Recurring Revenue.",
    metrics: [
      "Focus on early-stage B2B SaaS businesses",
      "All opportunities are currently at least £10k Monthly Recurring Revenue",
      "Successfully achieved an exit from the Haatch portfolio for 276x",
    ],
    funding: { raised: "£500,000", seeking: "£20,000" },
    image: "https://www.angelinvestmentnetwork.co.uk/media/image/6491adb28bc4d",
  },

  {
    id: 3,
    name: "LUNA London",
    location: "London, United Kingdom",
    description:
      "The average person spends 55 minutes per day in front of their mirror. Yet, the $4.8B mirror industry is still outdated & boring. We're spearheading the future of the personal mirror device. Tech-forward & disruptive, that customers love using daily.",
    metrics: [
      "£1.5m+ worth of mirrors sold while bootstrapped",
      "Featured in a Netflix film starring Kevin Hart",
      "40,000+ customers worldwide",
    ],
    funding: { raised: "£250,000", seeking: "£10,000" },
    image: "https://www.angelinvestmentnetwork.co.uk/media/image/6708d16248518",
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
      (prev) => (prev - decksPerPage + pitchDecks.length) % pitchDecks.length
    );

  const currentDecks = [...pitchDecks, ...pitchDecks] // Duplicate to simulate infinity
    .slice(currentIndex, currentIndex + decksPerPage);

  return (
    <section className="bg-white text-primary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center  pb-10">
          Exploring Investment Opportunities in the UK?
        </h2>
        <p className="text-xl text-center mb-12 max-w-[700px] mx-auto">
          Explore curated UK pitch decks from promising entrepreneurs, poised to
          make a lasting impact
        </p>

        <div className="grid md:grid-cols-3 gap-8 transition-transform duration-500 ease-in-out">
          {currentDecks.map((deck, idx) => (
            <div
              key={idx} // Changed to index to handle duplicated items
              className="relative text-white  rounded-xl shadow-2xl overflow-hidden
              bg-gradient-to-br from-primary to-red-700
              "
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
                <p className="flex items-center text-white mb-4">
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
                <div className=" p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total Raised:</span>
                    <span className="text-white">{deck.funding.raised}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Seeking:</span>
                    <span className="text-white">{deck.funding.seeking}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="  text-gl  bg-white text-primary font-bold py-1 px-6 mt-5 rounded-full transition duration-300">
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
            className="bg-primary text-white hover:bg-red-300 p-2 rounded-full transition duration-300"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={nextDecks}
            className="bg-primary text-white hover:bg-red-300 p-2 rounded-full transition duration-300"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>

        <p className="text-center mt-12 text-2xl">
          Browse innovative business ideas, startups, and funding needs from
          entrepreneurs across the UK
        </p>
        <div className="text-center mt-6">
          <button className="bg-primary text-white hover:bg-red-100 font-bold py-1 px-6 rounded-full text-xl transition duration-300">
            Browse Pitch Decks
          </button>
        </div>
      </div>
    </section>
  );
}
