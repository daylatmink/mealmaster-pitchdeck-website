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
        <RecruitSection />
        <Footer />
    </main>
);

export default Home;
