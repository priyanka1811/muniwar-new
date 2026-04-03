import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";

const Blog2 = () => {
    return (
        <>
            <Layout>
                <section className="section mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <span className="btn btn-tag">The Iori Blog</span>
                                <h2 className="color-brand-1 mt-15">
                                    Insight and advice from <br className="d-none d-lg-block" />
                                    our expert team
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Blog2;
