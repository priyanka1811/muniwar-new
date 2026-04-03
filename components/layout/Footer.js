import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 width-20">
                                <div className="mb-10">
                                    <img src="assets/imgs/template/muniwar-technologies-logo.png" alt="iori" />
                                </div>
                                <p className="font-sm mb-20 color-grey-400">
                                    Muniwar Technologies is a digital marketing agency that provides services like Search Engine Optimization, PPC Management, Social Media Management, Ecommerce Marketing at best prices.
                                </p>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Resource</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="/about">Product</Link>
                                    </li>
                                    <li>
                                        <Link href="/team">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/career">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Benefits</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Quick Link</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="#">Features</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Pricing Plan</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Best Program</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Press Kit</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Company</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="#">About</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Team Member</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Reviews</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Latest News</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-23">
                                <h5 className="mb-10 color-brand-1">Contact</h5>
                                <div>
                                     <ul className="menu-footer">
                                <li>
                                <i className="fa-light fa-location-dot"/>
                                <Link href="/">92-F, 3rd Floor, Hanuman Mandir Market, Munirka, New Delhi - 110067</Link>
                                </li>
                                <li>
                                <i className="fa-light fa-envelope"/>
                                <Link href="mailto:info@muniwar.com"> info@muniwar.com</Link>
                                </li>
                                <li>
                                <i className="fa-light fa-phone-flip"/>
                                <Link href="/">+91 888-22-66-111</Link>
                                </li>
                            </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                                    <ul className="menu-bottom">
                                        <li>
                                            <Link className="font-sm color-grey-300" href="/term-conditions">
                                                Privacy policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="font-sm color-grey-300" href="/term-conditions">
                                                Cookies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="font-sm color-grey-300" href="/term-conditions">
                                                Terms of service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                                    <span className="color-grey-300 font-md">Copyright ©2026, All Rights Reserved. Muniwar Technologies Private Limited</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
