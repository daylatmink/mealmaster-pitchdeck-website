import React from "react";

import Header from "../components/layout/Header";
import {
    DifferenceSection, FAQSection,
    FeaturesSection, Footer,
    HeroSection, MarketStatsSection,
    PersonasSection,
    ProblemSection, RecruitSection,
    SolutionSection
} from "../components";
import JoinSection from "../components/sections/JoinSection/JoinSection";


const Home = () => (
    <main>
        <Header />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DifferenceSection />
        <PersonasSection />
        <MarketStatsSection />
        <FAQSection />
        <JoinSection />
        <RecruitSection />
        <Footer />
    </main>
);

export default Home;
