import {
  Receipt,
  Gavel,
  PiggyBank,
  Shield,
  FileText,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Receipt,
    title: "Accountant",
    description:
      "Our experienced accountants provide comprehensive financial management, ensuring accurate bookkeeping, tax preparation, and strategic financial advice to keep your business on track.",
  },
  {
    icon: GraduationCap,
    title: "Solicitor",
    description:
      "Our solicitors specialize in legal matters, offering expert guidance in contract negotiations, compliance, and dispute resolution to protect your interests and navigate complex regulations.",
  },
  {
    icon: PiggyBank,
    title: "Financial Broker",
    description:
      "Our financial brokers connect you with tailored investment opportunities and funding solutions, leveraging their extensive network to help you achieve your financial goals.",
  },
  {
    icon: Shield,
    title: "Insurance Provider",
    description:
      "We offer a range of insurance solutions to safeguard your business against unforeseen risks, ensuring you have the right coverage to protect your assets and operations.",
  },
  {
    icon: FileText,
    title: "Will Provider",
    description:
      "Our will providers assist you in creating legally binding documents that outline your wishes, ensuring peace of mind for you and your loved ones regarding your estate.",
  },
  {
    icon: Gavel,
    title: "Valuation Expert",
    description:
      "Our valuation experts assess your business's worth, providing accurate and detailed reports to support investment decisions, mergers, acquisitions, or financing needs.",
  },
  {
    icon: Receipt,
    title: "Accountant",
    description:
      "Our experienced accountants provide comprehensive financial management, ensuring accurate bookkeeping, tax preparation, and strategic financial advice to keep your business on track.",
  },
  {
    icon: Gavel,
    title: "Solicitor",
    description:
      "Our solicitors specialize in legal matters, offering expert guidance in contract negotiations, compliance, and dispute resolution to protect your interests and navigate complex regulations.",
  },
];

export default function ProfessionalServices() {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-4">
          Get Our Professional Services
        </h2>
        <p className="text-2xl text-center mb-12">
          Assemble a Team for Your Project: It's Good; Organize Flawlessly: It's
          Better. Why? To Boost Productivity, Save Time, and Ignite Ideas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="hover:bg-primary text-white rounded-lg p-6 shadow-lg bg-red-700 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 mx-auto ">
                <service.icon className="w-12 h-12 text-white p-1" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-20">
          {" "}
          <button className="bg-primary mx-auto text-white hover:bg-red-700 font-bold py-4 px-10 rounded-full text-2xl transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Find more services providers
          </button>
        </div>
      </div>
    </section>
  );
}
