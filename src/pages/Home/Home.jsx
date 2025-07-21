import React from "react";
import "./Home.css";

import { Header, Footer, Testing } from "./shared";
import {
    HeroSection,
    CTASection,
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
} from "./sections";

const Home = () => (
    <main>
        <Header />

        <Testing />

        <HeroSection />
        <CTASection />
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
