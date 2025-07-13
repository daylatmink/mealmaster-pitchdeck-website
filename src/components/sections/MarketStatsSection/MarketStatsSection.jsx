import React from "react";
import "./MarketStatsSection.css";

const MarketStatsSection = () => {
    return (
        <section className="market-stats-full">
            <div className="market-stats-inner">
                <div className="stats-left">
                    <h3 className="stats-title">NGƯỜI TRẺ ĐANG ƯU TIÊN SỐNG KHỎE</h3>
                    <img src="/assets/7.png" alt="Người lo lắng" className="stats-icon" />
                    <h3 className="stats-subtitle">NHƯNG KHÔNG ĐỦ THỜI GIAN ĐỂ ĂN UỐNG ĐÚNG CÁCH</h3>
                </div>
                <div className="stats-right">
                    <img
                        src="/assets/infographic2.png"
                        alt="Biểu đồ hành vi"
                        className="stats-chart"
                    />
                </div>
            </div>
        </section>
    );
};

export default MarketStatsSection;
