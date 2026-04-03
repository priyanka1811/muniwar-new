import React from 'react';
import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "iori - Multipurpose Startup SaaS NextJS Template"}
                </title>
            </Head>
        </>
    );
};

export default PageHead;