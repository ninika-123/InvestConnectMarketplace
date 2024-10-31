import { PiggyBank, GraduationCap } from "lucide-react";
import { BsCurrencyPound } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { IoDiamondOutline } from "react-icons/io5";
import { PiStrategyBold } from "react-icons/pi";
import { RiSkull2Fill } from "react-icons/ri";

const services = [
  {
    icon: BsCurrencyPound,
    title: "Financial Services",
    description:
      "Our experienced accountants provide comprehensive financial management, ensuring accurate bookkeeping, tax preparation, and strategic financial advice to keep your business on track.",
    data: [
      "Accountants ",
      "financial statements, bookkeeping",
      "tax compliance",
      "Tax Advisors",
      "personal and",
      " corporate tax strategies",
      "Certified Public Accountants (CPA)",
      "Auditors",
    ],
  },
  {
    icon: GraduationCap,
    title: "legal Services",
    description:
      "Our solicitors specialize in legal matters, offering expert guidance in contract negotiations, compliance, and dispute resolution to protect your interests and navigate complex regulations.",

    data: [
      "Solicitors & Lawyers",
      "corporate law",
      "intellectual property",
      "contract law",
      "Compliance Specialists",
      "FCA compliance, regulatory guidance",
      "Will Services & Estate Planning",
      "Patent Attorneys",
      "Trademark Specialists",
      "Data Privacy & Protection Lawyers",
    ],
  },
  {
    icon: PiggyBank,
    title: "Investment & Funding Services",
    description:
      "Our financial brokers connect you with tailored investment opportunities and funding solutions, leveraging their extensive network to help you achieve your financial goals.",
    data: [
      "Investment Advisors",
      "Fund Managers",
      "Angel Investor Networks",
      "Venture Capital Advisors",
      "Crowdfunding Consultants",
      "Grant Writing Experts",
    ],
  },
  {
    icon: PiStrategyBold,
    title: "Business Strategy & Management Consulting",
    description:
      "We offer a range of insurance solutions to safeguard your business against unforeseen risks, ensuring you have the right coverage to protect your assets and operations.",
    data: [
      "Business Consultants",
      "strategic planning,",
      "business development",
      "Operations & Process",
      "Improvement Consultants",
      "Change Management Specialists",
      "Project Managers",
    ],
  },
  {
    icon: IoDiamondOutline,
    title: "Marketing & Branding",
    description:
      "Our will providers assist you in creating legally binding documents that outline your wishes, ensuring peace of mind for you and your loved ones regarding your estate.",
    data: [
      "Marketing Consultants",
      "strategic and digital marketing",
      "Brand Strategists",
      "Public Relations Consultants",
      "Content & Copywriting Experts",
    ],
  },
  {
    icon: RiSkull2Fill,
    title: "Risk Management & Insurance",
    description:
      "Our valuation experts assess your business's worth, providing accurate and detailed reports to support investment decisions, mergers, acquisitions, or financing needs.",
    data: [
      "Insurance Brokers",
      "business insurance",
      "liability",
      "Risk Assessment Consultants",
      "Health & Safety Consultants",
    ],
  },
  {
    icon: FaHouseDamage,
    title: "Real Estate & Property Management",
    description:
      "Our experienced accountants provide comprehensive financial management, ensuring accurate bookkeeping, tax preparation, and strategic financial advice to keep your business on track.",
    data: [
      "Real Estate Advisors",
      "Property Managers",
      "Commercial Lease Consultants",
      "Property Valuers",
    ],
  },
  {
    icon: GrCloudSoftware,
    title: "IT & Technology Services",
    description:
      "Our solicitors specialize in legal matters, offering expert guidance in contract negotiations, compliance, and dispute resolution to protect your interests and navigate complex regulations.",
    data: [
      "IT Consultants systems integration",
      "network security",
      "Cybersecurity Experts",
      "Cloud Computing Specialists",
      "Software Development Firms",
      "Blockchain",
      "Cryptocurrency Advisors",
    ],
  },
];

export default function ProfessionalServices() {
  return (
    <section className="bg-slate-100 text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">
          Get Our Professional Services
        </h2>
        <p className="text-xl text-center mb-12">
          Assemble a Team for Your Project: It's Good; Organize Flawlessly: It's
          Better. Why? To Boost Productivity, Save Time, and Ignite Ideas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className=" text-black rounded-lg p-6 shadow-lg bg-white transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 mx-auto ">
                <service.icon className="w-12 h-12 text-primary p-1" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">
                {service.title}
              </h3>
              <div className="flex flex-wrap gap-5 justify-center">
                {service.data
                  ? service.data.map((item) => (
                      <p>
                        {" "}
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm "
                        >
                          {item}
                        </span>
                      </p>
                    ))
                  : service.description}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-20">
          {" "}
          <button className="bg-primary mx-auto text-white hover:bg-red-700 font-bold py-2 px-10 rounded-full text-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Find more services providers
          </button>
        </div>
      </div>
    </section>
  );
}
