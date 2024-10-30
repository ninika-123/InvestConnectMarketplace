import AtInvest from "./Components/Home/AtInvest";
import Hero from "./Components/Home/Hero";
import InvestorPitchDeckShowcase from "./Components/Home/InvestorPitchDeckShowcase";
import Join from "./Components/Home/Join";
import MeetPotentialInvestors from "./Components/Home/MeetPotentialInvestors";
import IndustriesList from "./Components/Home/OurService";
import OurUniqueSelling from "./Components/Home/OurUniqueSelling";
import ProfessionalServices from "./Components/Home/ProfessionalServices";
import Testimonial from "./Components/Home/Testimonial";
import TrustedPartners from "./Components/Home/TrustedPartners";

function App() {
  return (
    <main>
      <Hero />
      <OurUniqueSelling />
      <InvestorPitchDeckShowcase />
      <TrustedPartners />
      <MeetPotentialInvestors />
      <ProfessionalServices />
      <Testimonial />
      <IndustriesList />
      <Join />
      <AtInvest />
    </main>
  );
}

export default App;
