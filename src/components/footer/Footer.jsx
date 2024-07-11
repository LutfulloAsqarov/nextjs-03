import React from "react";
import "./footer.scss";
import Image from "next/image";
import footerLogo from "@/assets/footer/footer.png";

const Footer = () => {
    return (
        <footer>
            <div className="container footer">
                <div className="footer__left">
                    <Image width={""} height={""} alt="img" src={footerLogo} />
                    <p>
                        Your natural candle made for your home and for your
                        wellness.
                    </p>
                </div>
                <div className="footer__right">
                    <ul>
                        <h3>Discovery</h3>
                        <li>New season</li>
                        <li>Most searched</li>
                        <li>Most sell</li>
                    </ul>
                    <ul>
                        <h3>About</h3>
                        <li>Help</li>
                        <li>Shipping</li>
                        <li>Affiliate</li>
                    </ul>
                    <ul>
                        <h3>Info</h3>
                        <li>Contact us</li>
                        <li>Privacy Policies</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
