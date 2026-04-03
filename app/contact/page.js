'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Accordion from '../../components/elements/Accordion';
import Layout from '../../components/layout/Layout';

const ContactUs = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Layout>
                <section className="section banner-contact">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7"><span className="title-line line-48">Get in Touch</span>
                                    <h1 className="color-brand-1 mb-20 mt-10">We'd love to hear<br className="d-none d-lg-block" />from you.</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-grey-500">Request a demo, ask a question, or get in touch here. If you're interested in working at Iori Coporation, check out our<Link className="ml-3" href="/career"> careers page.</Link></p>
                                        </div>
                                    </div>
                                    <div className="mt-30">
                                        <h5 className="color-brand-1">Install App</h5>
                                    </div>
                                    <div className="box-button mt-20"><a className="btn-app mb-15 hover-up" href="#"><img src="assets/imgs/template/appstore-btn.png" alt="iori" /></a><a className="btn-app mb-15 hover-up" href="#"><img src="assets/imgs/template/google-play-btn.png" alt="iori" /></a><a className="btn btn-default mb-15 pl-10 font-sm-bold hover-up" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="box-banner-contact"><img src="assets/imgs/page/contact/banner.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default ContactUs;
