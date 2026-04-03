import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";
import ExploreTopics from "../../components/slider/ExploreTopics";
import Knowledgebase from "../../components/slider/Knowledgebase";

const Help = () => {
    return (
        <>
            <Layout>
                <section className="section mt-90">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-40">
                                <span className="title-line line-48">Support Center</span>
                                <h2 className="color-brand-1 mt-15 mb-30">How can we help you?</h2>
                                <p className="font-md color-grey-500">Search here to get answers to your questions</p>
                            </div>
                            <div className="col-lg-7 mb-40 d-none d-md-block">
                                <div className="box-banner-help">
                                    <div className="box-cruelty shape-1">
                                        <img src="assets/imgs/page/help/cruelty.png" alt="iori" />
                                    </div>
                                    <div className="banner-img-1">
                                        <img src="assets/imgs/page/help/banner1.png" alt="iori" />
                                    </div>
                                    <div className="banner-img-2">
                                        <img src="assets/imgs/page/help/banner2.png" alt="iori" />
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

export default Help;
