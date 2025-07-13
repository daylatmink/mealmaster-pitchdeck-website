import React from "react";

import { Header, Footer } from "../components/layout";
import {
    HeroSection, 
    ProblemSection, 
    SolutionSection,

    DifferenceSection, 
    MarketStatsSection,
    StatementSection,

    FAQSection,
    JoinSection,
    RecruitSection,
} from "../components";


const Home = () => (
    <main>
        <Header />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />

        <DifferenceSection />
        <MarketStatsSection />
        <StatementSection />

        <FAQSection />
        <JoinSection />
        <RecruitSection />
        <Footer />
    </main>
);

export default Home;
