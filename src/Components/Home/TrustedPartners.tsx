import haba from "../../assets/trustedPartners/haba.png";
import all from "../../assets/trustedPartners/all.png";
import evo from "../../assets/trustedPartners/evo.png";
import idruide from "../../assets/trustedPartners/idruide.png";
import kiabi from "../../assets/trustedPartners/kiabi.png";
import h from "../../assets/trustedPartners/h.png";
import memento from "../../assets/trustedPartners/memento.png";
import { useState } from "react";

const partners = [
  { name: "HABA", logo: haba },
  { name: "all", logo: all },
  { name: "evo", logo: evo },
  { name: "caneva", logo: "caneva" },
  { name: "idruide", logo: idruide },
  { name: "hexagone", logo: "hexagone" },
  { name: "kiabi", logo: kiabi },
  { name: "h", logo: h },
  { name: "memento", logo: memento },
  { name: "bpce", logo: "bpce" },
];

export default function TrustedPartners() {
  return (
    <section className="bg-slate-100 text-white py-20">
      <div className="max-w-[800px] mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-primary ">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center"
            >
              <ImageComponent alt={partner.name} src={partner.logo} />
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

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {imgError ? (
        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg">
          <span className="text-primary text-sm text-center">
            Want to see yourself here?
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-32 h-32 object-contain mb-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          onError={() => setImgError(true)}
        />
      )}
    </>
  );
};
