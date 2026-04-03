import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";

const jobDetails = () => {
    return (
        <>
            <Layout>
                <section className="section pt-50 pb-100">
                    <div className="container">
                        <div className="box-image-detail">
                            <img className="bd-rd16 d-block" src="assets/imgs/page/job-detail/img-job.png" alt="iori" />
                        </div>
                        <div className="content-detail">
                            <div className="row">
                                <div className="col-lg-10 col-11 m-auto">
                                    <div className="box-detail-content">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 col-md-8 col-sm-12 col-12 mb-30">
                                                <h3 className="color-brand-1 mb-10 mt-0">Business Development Manager and Financial Services</h3>
                                                <span className="date-post font-xs color-grey-300">
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
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default jobDetails;
