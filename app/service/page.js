'use client';

import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Offer from "../../components/slider/Offer";

const pageServices = () => {
    const [pricing, setPricing] = useState(1);

    const handlePricing = (index) => {
        setPricing(index);
    };
    return (
        <>
            <Layout>
                <section className="section banner-service bg-grey-60 position-relative">
                    <div className="box-banner-abs">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xxl-6 col-xl-7 col-lg-12">
                                    <div className="box-banner-service">
                                        <h1 className="color-brand-1 mb-20">
                                            Advanced <br className="d-none d-xxl-block" />
                                            analytics to grow your business
                                        </h1>
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <p className="font-md color-grey-500">Collaborate, plan projects and manage resources with powerful features that your whole team can use. The latest news, tips and advice to help you run your business with less fuss.</p>
                                            </div>
                                        </div>
                                        <div className="mt-30">
                                            <h5 className="color-brand-1">Available on</h5>
                                        </div>
                                        <div className="box-button mt-20">
                                            <Link className="btn-app mb-15 hover-up" href="#">
                                                <img src="assets/imgs/template/appstore-btn.png" alt="iori" />
                                            </Link>
                                            <Link className="btn-app mb-15 hover-up" href="#">
                                                <img src="assets/imgs/template/google-play-btn.png" alt="iori" />
                                            </Link>
                                            <Link className="btn btn-default mb-15 pl-10 font-sm-bold hover-up" href="#">
                                                Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-xxl-5 col-xl-7 col-lg-6" />
                        <div className="col-xxl-7 col-xl-5 col-lg-6 pr-0">
                            <div className="d-none d-xxl-block pl-70">
                                <img className="w-100 d-block" src="assets/imgs/page/service/banner.png" alt="iori" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">What We Offer</h2>
                                <p className="font-lg color-gray-500">
                                    What makes us different from others? We give holistic solutions
                                    <br className="d-none d-lg-block" />
                                    with strategy, design &amp; technology.
                                </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <Offer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <span className="btn btn-tag">Business</span>
                                    <h3 className="color-brand-1 mt-10 mb-15">Integrate with over 1,000 project management apps</h3>
                                    <p className="font-md color-grey-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Task visualization
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-50 text-start">
                                        <Link className="btn btn-brand-1 hover-up" href="#">
                                            Download App
                                        </Link>
                                        <Link className="btn btn-default font-sm-bold hover-up" href="#">
                                            Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default pageServices;
