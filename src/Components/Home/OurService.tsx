import {
  FaTh,
  FaRegMoneyBillAlt,
  FaStethoscope,
  FaLeaf,
  FaHome,
  FaShoppingCart,
  FaSeedling,
  FaTruck,
  FaFilm,
  FaGraduationCap,
  FaIndustry,
  FaUserCircle,
  FaPhoneAlt,
  FaCar,
  FaPlane,
  FaBriefcase,
  FaUsers,
  FaHeart,
  FaBuilding,
  FaGamepad,
  FaPalette,
  FaClipboardList,
  FaTools,
  FaUtensils,
  FaCouch,
  FaRunning,
  FaCalendarAlt,
  FaGlobeAmericas,
  FaShuttleVan,
  FaHandHoldingHeart,
  FaChartBar,
  FaHardHat,
} from "react-icons/fa";

const industries = [
  { name: "Technology", icon: <FaTh /> },
  { name: "Fintech", icon: <FaRegMoneyBillAlt /> },
  { name: "Healthcare & Medtech", icon: <FaStethoscope /> },
  { name: "Renewable Energy & Clean Tech", icon: <FaLeaf /> },
  { name: "Real Estate & PropTech", icon: <FaHome /> },
  { name: "E-commerce & Retail", icon: <FaShoppingCart /> },
  { name: "Agriculture & Agtech", icon: <FaSeedling /> },
  { name: "Logistics & Transportation", icon: <FaTruck /> },
  { name: "Media & Entertainment", icon: <FaFilm /> },
  { name: "Education & Edtech", icon: <FaGraduationCap /> },
  { name: "Manufacturing & Industrial Tech", icon: <FaIndustry /> },
  { name: "Consumer Goods & Lifestyle", icon: <FaUserCircle /> },
  { name: "Telecommunications", icon: <FaPhoneAlt /> },
  { name: "Hospitality & Travel", icon: <FaUtensils /> },
  { name: "Food & Beverage", icon: <FaCar /> },
  { name: "Automotive", icon: <FaPlane /> },
  { name: "Aerospace & Defense", icon: <FaBriefcase /> },
  { name: "Legal & RegTech", icon: <FaUsers /> },
  {
    name: "Insurance",
    icon: (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      </div>
    ),
  },
  { name: "Pharmaceuticals & Biotechnology", icon: <FaBuilding /> },
  { name: "Public Sector & Government", icon: <FaChartBar /> },
  { name: "Fashion & Apparel", icon: <FaPalette /> },
  { name: "Financial Services", icon: <FaClipboardList /> },
  { name: "Nonprofits & Social Impact", icon: <FaHandHoldingHeart /> },
  { name: "Smart Cities & Urban Development", icon: <FaGlobeAmericas /> },
  { name: "Gaming & eSports", icon: <FaGamepad /> },
  { name: "Art & Creative Industries", icon: <FaPalette /> },
  { name: "Mining & Natural Resources", icon: <FaHardHat /> },
  { name: "Mining & Natural Resources", icon: <FaTools /> },
  { name: "Restaurant & Food Service", icon: <FaUtensils /> },
  { name: "Home & Interior Design", icon: <FaCouch /> },
  { name: "Sports & Fitness", icon: <FaRunning /> },
  { name: "Events & Entertainment", icon: <FaCalendarAlt /> },
  { name: "Environmental & Sustainability Services", icon: <FaLeaf /> },
  { name: "Tourism & Leisure", icon: <FaGlobeAmericas /> },
  { name: "Transportation & Mobility", icon: <FaShuttleVan /> },
  { name: "Personal Care & Wellness", icon: <FaHeart /> },
  {
    name: "Professional Services (Consulting, Accounting, etc.)",
    icon: <FaBriefcase />,
  },
  { name: "Other Emerging Industries", icon: <FaRegMoneyBillAlt /> },
  { name: "Other", icon: <FaRegMoneyBillAlt /> },
];

const Industries: React.FC = () => {
  return (
    <section className="bg-white pt-5 pb-20">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold mb-6 text-center text-primary ">
          Our Industries
        </h2>
        <p className="text-2xl text-center text-gray-600 mb-10 pb-5">
          We connect investors with startups and businesses from all sectors to
          ensure the relationship is valuable to both parties.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="flex items-center bg-primary shadow-md rounded-lg p-4"
            >
              <div className=" text-white mr-4 text-4xl">{industry.icon}</div>
              <span className="text-lg font-semibold text-white">
                {industry.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Industries;
