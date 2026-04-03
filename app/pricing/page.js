'use client';

import Link from "next/link";
import React, { useState } from "react";
import Accordion from "../../components/elements/Accordion";
import Layout from "../../components/layout/Layout";

const pagePrice = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout>
                <section className="section bg-plan-3 pt-110 pb-0">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Choose The Best Plan</h2>
                                <p className="font-lg color-gray-500">
                                    Pick your plan. <br className="d-none d-lg-block" /> Change whenever you want.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <a className="btn btn-default font-sm-bold pl-0">
                                    Compare plans
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan">
                                            <img src="assets/imgs/page/homepage1/free.svg" alt="iori" />
                                        </div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Trial Plan</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial">
                                        <span className="font-lg-bold color-brand-1">FREE</span>
                                        <span className="font-md color-grey-500">- 30 days trial</span>
                                        <br />
                                        <span className="font-xs color-grey-500">No Credit card required</span>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Retargeting Ads
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                            Try for free
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

export default pagePrice;
