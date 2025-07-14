import React from "react";
import "./Home.css";

import { Header, Footer } from "../../components";
import {
    HeroSection,
    ProblemSection,
    SolutionSection,
    DifferenceSection,
    MarketStatsSection,

    StatementSection,
    FAQSection,
    BannerSection,
    JoinSection,
    RecruitSection,
    RegisterBannerSection
} from "../../components";


const Home = () => (
    <main>
        <Header />

        <sections>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />

            <DifferenceSection />
            <MarketStatsSection />
            <StatementSection />

            <FAQSection />
            <BannerSection />
            <JoinSection />
            <RecruitSection />
            <RegisterBannerSection />
        </sections>

        <Footer />
    </main>
);

export default Home;
