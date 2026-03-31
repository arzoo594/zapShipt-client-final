import React from "react";
import Banner from "../Banner";
import HowItWork from "../HowItWork";
import OurServices from "../OurServices/OurServices";
import WeHelpedCompany from "../../WeHelped/WeHelpedCompany";
import WeHelp from "../../WeHelp/WeHelp";
import MerchantSatisfaction from "../MerchantSatisfaction/MerchantSatisfaction";
import CustomerReview from "../CustomerReview/CustomerReview";
import FAQ from "../FAQ/FAQ";
import AnimateOnScroll from "../../../Component/AnimateOnScroll";

const Home = () => {
  return (
    <div>
      <AnimateOnScroll>
        <Banner></Banner>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HowItWork></HowItWork>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <OurServices />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WeHelpedCompany />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WeHelp />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <MerchantSatisfaction></MerchantSatisfaction>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CustomerReview />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FAQ></FAQ>
      </AnimateOnScroll>
    </div>
  );
};

export default Home;
