import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-logo">
                    <img src="/assets/logo2.png" alt="MealMaster" />
                </div>

                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#about">Về chúng tôi</a></li>
                        <li><a href="#career">Tuyển dụng</a></li>
                        <li><a href="#partners">Đối tác</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Sản phẩm & Hỗ trợ</h4>
                    <ul>
                        <li><a href="#app">MealMaster App</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#guide">Hướng dẫn sử dụng</a></li>
                        <li><a href="#contact">Liên hệ hỗ trợ</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Điều khoản</h4>
                    <ul>
                        <li><a href="#terms">Điều khoản sử dụng</a></li>
                        <li><a href="#privacy">Chính sách bảo mật</a></li>
                        <li><a href="#refund">Chính sách hoàn tiền</a></li>
                        <li><a href="#shipping">Chính sách giao hàng</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Kết nối</h4>
                    <ul className="footer-social">
                        <li>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="footer-bottom">
                © {new Date().getFullYear()} MealMaster by VitaGrid. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;