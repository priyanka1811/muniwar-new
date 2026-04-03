import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout/Layout';

const pageLogin = () => {
    return (
        <>
            <Layout>
                <section className="section banner-login position-relative float-start">
                    <div className="box-banner-abs">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xxl-5 col-xl-12 col-lg-12">
                                    <div className="box-banner-login">
                                        <h2 className="color-brand-1 mb-15">Welcome back</h2>
                                        <p className="font-md color-grey-500">Fill your email address and password to sign in.</p>
                                        <div className="line-login mt-25 mb-50" />
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mb-25">
                                                    <input className="form-control icon-user" type="text" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mb-25">
                                                    <input className="form-control icon-password" type="text" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6 mt-15">
                                                <div className="form-group mb-25">
                                                    <label className="cb-container">
                                                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">Remember me</span><span className="checkmark" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6 mt-15">
                                                <div className="form-group mb-25 text-end"><Link className="font-xs color-grey-500" href="#">Forgot password?</Link></div>
                                            </div>
                                            <div className="col-lg-12 mb-25">
                                                <button className="btn btn-brand-lg btn-full font-md-bold" type="submit">Sign in</button>
                                            </div>
                                            <div className="col-lg-12"><span className="color-grey-500 d-inline-block align-middle font-sm">
                                                Don't have an account?
                                            </span><Link className="d-inline-block align-middle color-success ml-3" href="register">  Sign up now</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-xxl-5 col-xl-7 col-lg-6" />
                        <div className="col-xxl-7 col-xl-5 col-lg-6 pr-0">
                            <div className="d-none d-xxl-block pl-70"><img className="w-100 d-block" src="assets/imgs/page/login/banner.png" alt="iori" /></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default pageLogin;
