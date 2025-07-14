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
import BannerSection from "../components/sections/BannerSection";
import RegisterBannerSection from "../components/sections/RegisterBannerSection";


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
        <BannerSection />
        <JoinSection />
        <RecruitSection />
        <RegisterBannerSection />
        <Footer />
    </main>
);

export default Home;
