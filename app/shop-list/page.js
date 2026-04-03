import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout/Layout';

const shopList = () => {
    return (
        <>
            <Layout>
                <section className="section mt-30">
                    <div className="container">
                        <div className="box-banner-shop-list bg-4">
                            <div className="row align-items-center">
                                <div className="col-lg-6 text-center">
                                    <div className="box-banner-image bg-10"><img className="mw-90" src="assets/imgs/page/shop-list/banner.png" alt="iori" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-info-banner-shop-list">
                                        <h6 className="color-danger mb-10">HOT DEAL</h6>
                                        <h2 className="color-gray-800 mb-20">Leather Canvas Camera Bag Vintage</h2>
                                        <div className="d-flex align-items-center mb-30 box-price-banner">
                                            <h3 className="color-success mr-30">$318.00</h3>
                                            <h4 className="color-grey-200 mr-30">$420.00</h4>
                                            <p className="font-md color-grey-200">(In stock)</p>
                                        </div>
                                        <p className="mb-30 font-md color-grey-500">We're lively, not corporate. We have the energy and boldness of a startup and the expertise and pragmatism of a scale-up. All in one place.</p>
                                        <div className="box-quantity">
                                            <div className="form-quantity mr-10">
                                                <input className="input-quantity" type="text" defaultValue={1} /><span className="button-quantity button-up" /><span className="button-quantity button-down"> </span>
                                            </div><Link className="btn btn-brand-1 mr-10" href="#">Add To Cart</Link><Link className="btn btn-brand-1 btn-wish" href="#">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg></Link>
                                        </div>
                                        <div className="mt-60 d-flex align-item-center box-share-banner"> <strong className="font-xs-bold color-brand-1 mr-20">Share</strong>
                                            <div className="list-socials mt-0 d-inline-block"> <Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="box-sale"> <span className="color-danger font-xs-bold text-uppercase">Sale off 50%</span>
                                    <h5 className="color-brand-1 mt-5 mb-5">Best Offer This Year</h5>
                                    <p className="font-xs color-grey-500">Use discount code in checkout page.</p>
                                    <div className="mt-15"> <Link className="btn btn-right-arrow" href="#">Shop Now</Link></div>
                                    <div className="box-img-right"> <img src="assets/imgs/page/shop/sale1.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="box-sale box-sale-left"> <span className="color-success font-xs-bold text-uppercase">Tripod Colection</span>
                                    <h5 className="color-brand-1 mt-5 mb-5">For Professional</h5>
                                    <p className="font-xs color-grey-500">Use discount code in checkout page.</p>
                                    <div className="mt-15"> <Link className="btn btn-right-arrow" href="#">Shop Now</Link></div>
                                    <div className="box-img-left"> <img src="assets/imgs/page/shop/sale2.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="box-sale"> <span className="color-info font-xs-bold text-uppercase">Hot deal</span>
                                    <h5 className="color-brand-1 mt-5 mb-5">Sale Off Digital Camera</h5>
                                    <p className="font-xs color-grey-500">Use discount code in checkout page.</p>
                                    <div className="mt-15"> <Link className="btn btn-right-arrow" href="#">Shop Now</Link></div>
                                    <div className="box-img-right"> <img src="assets/imgs/page/shop/sale3.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Latest Products</h2>
                            </div>
                        </div>
                        <div className="mt-30 mb-60">
                            <ul className="list-buttons list-buttons-round">
                                <li> <Link className="active" href="#" data-type="all">Digital Cameras</Link></li>
                                <li> <Link href="#" data-type="featured">Mirrorless Camera</Link></li>
                                <li> <Link href="#" data-type="company">Camera Flashes</Link></li>
                                <li> <Link href="#" data-type="product-news">Travel Camera</Link></li>
                                <li> <Link href="#" data-type="customer-stories">Instant Camera</Link></li>
                                <li> <Link href="#" data-type="guides">Accessories</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default shopList;
