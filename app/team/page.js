import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";

const pageTeam = () => {
    return (
        <>
            <Layout>
                <section className="section banner-team">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="color-brand-1 mb-20">Customers Love Our Creative Team, and So Will You</h2>
                                    <div className="box-button mt-30 mb-60">
                                        <Link className="btn btn-brand-1 hover-up" href="#">
                                            Contact Us
                                        </Link>
                                        <Link className="btn btn-default font-sm-bold hover-up" href="#">
                                            Support Center
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <p className="font-md color-grey-500 mb-25">"Highly recommend Iori Agency! They guide us on marketing initiatives and develop great strategies to increase our return on investment. The agency is excellent at being cooperative and responding quickly."</p>
                                    <div className="box-author">
                                        <Link href="#">
                                            <img src="assets/imgs/page/team/author.png" alt="iori" />
                                        </Link>
                                        <div className="author-info">
                                            <Link href="#">
                                                <span className="font-md-bold color-brand-1 author-name">Bessie Cooper</span>
                                            </Link>
                                            <div className="rating d-inline-block">
                                                <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 d-none d-lg-block">
                                    <div className="box-banner-team">
                                        <div className="arrow-down-banner shape-1" />
                                        <div className="arrow-right-banner shape-2" />
                                        <div className="banner-col-1">
                                            <div className="img-banner">
                                                <img src="assets/imgs/page/team/banner1.png" alt="iori" />
                                            </div>
                                        </div>
                                        <div className="banner-col-2">
                                            <div className="img-banner">
                                                <img src="assets/imgs/page/team/banner2.png" alt="iori" />
                                            </div>
                                            <div className="img-banner hasBorder">
                                                <img src="assets/imgs/page/team/banner3.png" alt="iori" />
                                            </div>
                                        </div>
                                        <div className="banner-col-3">
                                            <div className="img-banner hasBorder2">
                                                <img src="assets/imgs/page/team/banner4.png" alt="iori" />
                                            </div>
                                            <div className="img-banner">
                                                <img src="assets/imgs/page/team/banner5.png" alt="iori" />
                                            </div>
                                            <div className="img-banner">
                                                <img src="assets/imgs/page/team/banner6.png" alt="iori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section bg-grey-80 pt-70 pb-70">
                    <div className="container">
                        <ul className="list-partners">
                            <li>
                                <img src="assets/imgs/page/homepage1/placed.png" alt="iori" />
                            </li>
                            <li>
                                <img src="assets/imgs/page/homepage1/cuebiq.png" alt="iori" />
                            </li>
                            <li>
                                <img src="assets/imgs/page/homepage1/factual.png" alt="iori" />
                            </li>
                            <li>
                                <img src="assets/imgs/page/homepage1/placeiq.png" alt="iori" />
                            </li>
                            <li>
                                <img src="assets/imgs/page/homepage1/airmeet.png" alt="iori" />
                            </li>
                            <li>
                                <img src="assets/imgs/page/homepage1/spen.png" alt="iori" />
                            </li>
                            <li>
                                <img src="assets/imgs/page/homepage1/klippa.png" alt="iori" />
                            </li>
                            <li>
                                <img src="assets/imgs/page/homepage1/matrix.png" alt="iori" />
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="section mt-90">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-6">
                                <h6 className="color-brand-1 mb-20">Our leadership team</h6>
                                <h2 className="color-brand-1 mb-50">Meet the amazing team behind Iori</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default pageTeam;
