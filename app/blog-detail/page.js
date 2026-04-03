import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";

const BlogDetails = () => {
    return (
        <>
            <Layout>
                <div className="section mt-35">
                    <div className="container">
                        <div className="breadcrumbs">
                            <ul>
                                <li>
                                    {" "}
                                    <Link href="#">
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    {" "}
                                    <Link href="#">Blog</Link>
                                </li>
                                <li>
                                    {" "}
                                    <Link href="#">The Betty Crocker Secret to an Email Marketing Strategy People Enjoy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default BlogDetails;
