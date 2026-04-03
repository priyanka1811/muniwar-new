'use client';

import Link from "next/link";
import React, { useState } from "react";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import Testimonial from "../components/slider/Testimonial";

const HomePage1 = () => {
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Layout>
                <section className="section banner-6">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="box-banner-6">
                                    <div className="img-testimonials-1 shape-1">
                                        <img src="assets/imgs/page/homepage6/testimonial.png" alt="iori" />
                                    </div>
                                    <div className="img-testimonials-2 shape-2">
                                        <img src="assets/imgs/page/homepage6/testimonial2.png" alt="iori" />
                                    </div>
                                    <img className="img-main" src="assets/imgs/page/home/muniwar-home-banner.png" alt="Muniwar Banner" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="box-banner-right-home6">
                                    <span className="title-line line-48">Performance. Data. Growth.</span>
                                    <h1 className="color-brand-1 mb-20 mt-5">Strategic Consulting for Scalable Business Growth</h1>
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <p className="font-lg color-grey-500 mb-20">We help&nbsp;<strong>NGOs, marketplaces, and growth-focused businesses</strong>&nbsp;scale impact and revenue through&nbsp;<strong>performance marketing, advanced analytics, and AI-powered growth strategies</strong></p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-20">
                                        <Link className="btn btn-default mb-15 pl-10 font-sm-bold hover-up btn-two-rounded" href="#">
                                            Get Started
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                       <Link className="btn btn-default mb-15 pl-10 font-sm-bold hover-up btn-two-rounded" href="#">
                                            Explore Our Solutions
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
                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">What We Do</h2>
                                <p className="font-lg color-gray-500">
                                    End-to-end growth consulting powered by performance marketing, data intelligence, and AI automation — built for organizations that want sustainable scale.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <a className="btn btn-default font-sm-bold pl-0">
                                    Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                        <img src="assets/imgs/page/homepage1/cross.png" alt="iori" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">NGO Fundraising & Donor Growth</h4>
                                        <p className="font-md color-grey-500 mb-15">We help nonprofits scale donations, reach the right donors, and maximize lifetime value using data-driven fundraising strategies.</p>
                                        <ul className="mt-3">
                                            <li>Donation funnel optimization</li>
                                            <li>Donor acquisition campaigns</li>
                                            <li>Email &amp; WhatsApp donor nurturing</li>
                                            <li>Crowdfunding &amp; event campaigns</li>
                                        </ul>
                                        <div className="box-button-offer">
                                            <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                                                Explore NGO Solutions
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                        <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Performance Marketing & Media Buying</h4>
                                        <p className="font-md color-grey-500 mb-15">ROI-focused advertising across search, social, programmatic, and marketplaces — optimized for growth and efficiency.</p>
                                        <ul class="mt-3">
                                            <li>Paid search & paid social</li>
                                            <li>Display, video & OTT advertising</li>
                                            <li>Remarketing & affiliate marketing</li>
                                            <li>Amazon & Flipkart Ads</li>
                                        </ul>
                                        <div className="box-button-offer">
                                            <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                                                View Performance Marketing Services
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                        <img src="assets/imgs/page/homepage1/cross3.png" alt="iori" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Data, Analytics & AI-Powered Growth</h4>
                                        <p className="font-md color-grey-500 mb-15">Turn data into decisions with analytics, automation, and AI-driven optimization.</p>
                                        <ul class="mt-3">
                                            <li>Web & app analytics</li>
                                            <li>Conversion rate optimization</li>
                                            <li>Marketing automation</li>
                                            <li>AI-SEO, predictive modeling & personalization</li>
                                        </ul>
                                        <div className="box-button-offer">
                                            <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                                                AI-SEO, predictive modeling & personalization
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 bg-grey-80 bg-plan pt-110 pb-110">
                    <div className="container">
                        <div className="row mt-50 align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="title-line mb-10">Why Choose Us</div>
                                <h2 className="color-brand-1">Why Choose<br/>Muniwar Technologies</h2>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image">
                                        <img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">
                                            <a className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">
                                                NGO-First Growth Expertise
                                            </a>
                                        </h4>
                                        <p className="font-md color-grey-500 mb-5">We understand fundraising, donor psychology, and mission-driven growth — not just ads.</p>
                                        <div className="box-button-offer">
                                            <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                                                Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image">
                                        <img src="assets/imgs/page/homepage2/we-do.png" alt="iori" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">
                                            <a className="color-brand-1" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">
                                                Data Before Decisions
                                            </a>
                                        </h4>
                                        <p className="font-md color-grey-500 mb-5">Every strategy is backed by analytics, dashboards, and measurable KPIs.</p>
                                        <div className="box-button-offer">
                                            <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                                                Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image">
                                        <img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">
                                            <a className="color-brand-1" href="Share updates instantly within our project management software, and get the entire team collaborating">
                                                AI-Powered Optimization
                                            </a>
                                        </h4>
                                        <p className="font-md color-grey-500 mb-5">We use AI to improve targeting, content, bidding, and personalization at scale.</p>
                                        <div className="box-button-offer">
                                            <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                                                Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image">
                                        <img src="assets/imgs/page/homepage2/we-do2.png" alt="iori" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">
                                            <a className="color-brand-1" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">
                                                Full-Funnel Ownership
                                            </a>
                                        </h4>
                                        <p className="font-md color-grey-500 mb-5">From awareness to conversion to retention — we manage the entire growth journey.</p>
                                        <div className="box-button-offer">
                                            <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                                                Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image">
                                        <img src="assets/imgs/page/homepage2/we-do5.png" alt="iori" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">
                                            <a className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">
                                                Unlimited ways to work
                                            </a>
                                        </h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                        <div className="box-button-offer">
                                            <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                                                Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 <section className="section counter-sec mt-50">
                    <div className="container">
                        <div className="outer-box">
                            <div className="row mt-50">
                            <div className="col-xl-5 col-lg-3">
                                <h2 className="text-white mb-20">
                                    Impact That Speaks for Itself
                                </h2>
                                <ul class="list">
                                    <li><i class="fa-regular fa-check"></i> Multiple industries served: NGOs, eCommerce, Real Estate</li>
                                    <li><i class="fa-regular fa-check"></i> Trusted by global brands &amp; mission-driven organizations</li>
                                </ul>
                            </div>
                            <div className="col-xl-7 col-lg-9">
                                <div className="row">
                                    <div className="col-lg-6 col-md-3 col-sm-6 col-6 text-center mb-20">
                                        <div className="inner-box">
                                             <h2 className="title">10M+</h2>
                                             <p className="sub-title">Lives reached globally</p>
                                        </div> 
                                    </div>
                                    <div className="col-lg-6 col-md-3 col-sm-6 col-6 text-center mb-20">
                                        <div className="inner-box">
                                             <h2 className="title">100+</h2>
                                             <p className="sub-title">Campaigns scaled successfully</p>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    </div>
                    <div className="border-bottom mt-70" />
                </section>
                <section className="section mt-40 mb-40">
                    <div className="container">
                        <div className="row align-items-center mt-50">
                            <div className="col-lg-4 col-md-12 col-sm-12 mb-30">
                                {" "}
                                <span className="title-line line-48">How it work</span>
                                <h2 className="color-brand-1 mt-10 mb-20">Our Growth Process</h2>
                                <p className="color-grey-500 font-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer-style-2 card-left bg-white">
                                    <div className="card-offer hover-up">
                                        <div className="card-image">
                                            <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" />
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Discovery & Strategy</h4>
                                            <p className="font-md color-grey-500 mb-15">We analyze your mission, audience, data, and growth barriers to define clear objectives.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer-style-2 card-left bg-grey-60">
                                    <div className="card-offer hover-up">
                                        <div className="card-image">
                                            <img src="assets/imgs/page/homepage1/cross.png" alt="iori" />
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Execution & Optimization</h4>
                                            <p className="font-md color-grey-500 mb-15">Campaigns are launched across the right channels and optimized continuously using real-time data.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image">
                                        <Link href="#">
                                            <div className="box-image">
                                                <img src="assets/imgs/page/homepage3/certification.png" alt="iori" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="#">
                                            <h6 className="color-brand-1 icon-up">Certification</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image">
                                        <Link href="#">
                                            <div className="box-image">
                                                <img src="assets/imgs/page/homepage3/conference.png" alt="iori" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="#">
                                            <h6 className="color-brand-1 icon-up">Conference</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image">
                                        <Link href="#">
                                            <div className="box-image">
                                                <img src="assets/imgs/page/homepage3/research.png" alt="iori" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="#">
                                            <h6 className="color-brand-1 icon-up">Research</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image">
                                        <Link href="#">
                                            <div className="box-image">
                                                <img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="#">
                                            <h6 className="color-brand-1 icon-up">Dispersal</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image">
                                        <Link href="#">
                                            <div className="box-image">
                                                <img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="#">
                                            <h6 className="color-brand-1 icon-up">Enterprise</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image">
                                        <Link href="#">
                                            <div className="box-image">
                                                <img src="assets/imgs/page/homepage3/team-building.png" alt="iori" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="#">
                                            <h6 className="color-brand-1 icon-up">Team Building</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-40 mb-30 bg-faqs">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                                <p className="font-lg color-gray-500">
                                    Feeling inquisitive? Have a read through some of our FAQs or
                                    <br className="d-none d-lg-block" /> contact our supporters for help
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <a className="btn btn-default font-sm-bold pl-0">
                                    Contact Us
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-50 mb-100">
                            <div className="col-xl-3 col-lg-4">
                                <ul className="list-faqs nav nav-tabs" role="tablist">
                                    <li>
                                        <a className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)}>
                                            <span>General Support</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}>
                                            <span>Order / Purchase</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}>
                                            <span>Download / Install</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={activeIndex === 4 ? "active" : ""} onClick={() => handleOnClick(4)}>
                                            <span>Technology</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={activeIndex === 5 ? "active" : ""} onClick={() => handleOnClick(5)}>
                                            <span>Your Account</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-80 text-start mb-40">
                                    <Link className="btn btn-brand-1 hover-up" href="#">
                                        Contact Us
                                    </Link>
                                    <a className="btn btn-default font-sm-bold hover-up" href="#">
                                        Support Center
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="tab-content tab-content-slider">
                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom" />
                </section>
                <section className="section mt-50 bg-plant">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">What our custommers are saying</h2>
                                <p className="font-lg color-gray-500">
                                    Hear from our users who have saved thousands on their Startup
                                    <br className="d-none d-lg-block" /> and SaaS solution spend
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <a className="btn btn-default font-sm-bold pl-0">
                                    View All
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-3">
                                    <Testimonial />
                                    <div className="swiper-pagination swiper-pagination-2 swiper-pagination-group-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">From our blog </h2>
                                <p className="font-lg color-gray-500">
                                    Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.
                                    <br className="d-none d-lg-block" />
                                    Aenean vulputate sodales urna ut vestibulum
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <a className="btn btn-default font-sm-bold pl-0">
                                    View All
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-55">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/blog/blog-1.jpg" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h6 className="color-brand-1">Facebook Marketing Tips for Promoting Eye Care Clinic & Centers</h6>
                                        </Link>
                                        <p className="font-md color-grey-500 mt-20">Involving patients and your community on social media plays an important branding role. Everyone is on Facebook...</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">
                                                Technology
                                            </Link>
                                            <span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2026
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/blog/blog-2.jpg" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h6 className="color-brand-1">Top 4 Tips for Local SEO to Grow Your Interior Designer Business</h6>
                                        </Link>
                                        <p className="font-md color-grey-500 mt-20">The business of interior designing has been quite competitive and many competitors are emerging every day.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">
                                                Marketting
                                            </Link>
                                            <span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2026
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/blog/blog-3.jpg" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h6 className="color-brand-1">Top 5 Step to Step Guide to Local SEO for Chartered Accountant</h6>
                                        </Link>
                                        <p className="font-md color-grey-500 mt-20">What do they do when a potential client needs to find an accounting firm in your area? Chances are, they turn to Google.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">
                                                Media
                                            </Link>
                                            <span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2026
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
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

export default HomePage1;
