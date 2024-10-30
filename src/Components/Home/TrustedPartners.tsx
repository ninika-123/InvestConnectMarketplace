import haba from "../../assets/trustedPartners/haba.png";
import all from "../../assets/trustedPartners/all.png";
import evo from "../../assets/trustedPartners/evo.png";
import caneva from "../../assets/trustedPartners/caneva.png";
import idruide from "../../assets/trustedPartners/idruide.png";
import hexagone from "../../assets/trustedPartners/hexagone.png";
import kiabi from "../../assets/trustedPartners/kiabi.png";
import h from "../../assets/trustedPartners/h.png";
import memento from "../../assets/trustedPartners/memento.png";
import bpce from "../../assets/trustedPartners/bpce.png";

const partners = [
  { name: "HABA", logo: haba },
  { name: "all", logo: all },
  { name: "evo", logo: evo },
  { name: "caneva", logo: caneva },
  { name: "idruide", logo: idruide },
  { name: "hexagone", logo: hexagone },
  { name: "kiabi", logo: kiabi },
  { name: "h", logo: h },
  { name: "memento", logo: memento },
  { name: "bpce", logo: bpce },
];

export default function TrustedPartners() {
  return (
    <section className="bg-gradient-to-br from-[#F3F4F6] to-white text-white py-16">
      <div className="max-w-[800px] mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-primary -mt-10">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 object-contain mb-2 rounded-lg  shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              />
              {/*<p
                className={`text-gray-800 text-sm text-center transition-opacity duration-300 ${
                  hoveredPartner === partner.name ? "opacity-100" : "opacity-0"
                }`}
              >
                {partner.name}
              </p>*/}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-4xl mb-6 text-primary">
            Want to see yourself here?
          </p>
          <button className=" text-white text-2xl font-bold bg-primary font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
