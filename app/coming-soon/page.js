import React from "react";
import Layout from "../../components/layout/Layout";

const comingSoon = () => {
    return (
        <>
            <Layout>
                <section className="section mt-90">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 mb-40">
                                <span className="btn btn-tag">Under Construction</span>
                                <h1 className="color-brand-1 mt-15 mb-30">We are coming soon</h1>
                                <div className="box-count box-count-square mb-50">
                                    <div className="deals-countdown" data-countdown="2026/02/25 00:00:00" />
                                </div>
                                <p className="font-md color-grey-500">
                                    Our design projects are fresh and simple and will benefit your
                                    <br className="d-none d-lg-block" />
                                    business greatly. Learn more about our work!
                                </p>
                            </div>
                            <div className="col-lg-5 mb-40">
                                <object data="assets/imgs/page/coming/coming_soon.svg" type="image/svg+xml" />
                            </div>
                        </div>
                        <div className="border-bottom mb-0 mt-50" />
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default comingSoon;
