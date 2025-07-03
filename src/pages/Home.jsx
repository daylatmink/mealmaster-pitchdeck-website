import React from "react";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import FeaturesSection from "../components/FeaturesSection";
import DifferenceSection from "../components/DifferenceSection";
import PersonasSection from "../components/PersonasSection";
import MarketStatsSection from "../components/MarketStatsSection";
import FAQSection from "../components/FAQSection";
import RecruitSection from "../components/RecruitSection";
import Footer from "../components/Footer";
const Home = () => (
    <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DifferenceSection />
        <PersonasSection />
        <MarketStatsSection />
        <FAQSection />
        <RecruitSection />
        <Footer />
    </main>
);

export default Home;