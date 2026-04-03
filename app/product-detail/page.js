'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ThumbSlider from '../../components/slider/ThumbSlider';
import ModalVideo from 'react-modal-video';

const productDetails = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <div className="section mt-35">
                    <div className="container">
                        <div className="breadcrumbs">
                            <ul>
                                <li> <Link href="#">
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>Home</Link></li>
                                <li> <Link href="#">Products</Link></li>
                                <li> <Link href="#">Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-30">
                                <h3 className="color-gray-800 mb-20">Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX</h3>
                                <div className="d-flex align-items-center mb-30 box-price-banner">
                                    <h3 className="color-success mr-30">$318.00</h3>
                                    <h4 className="color-grey-200 mr-30">$420.00</h4>
                                    <p className="font-md color-grey-200">(In stock)</p>
                                </div>
                                <div className="mb-50">
                                    <ul className="list-dots">
                                        <li className="font-xs">Class leading image quality, ISO range, image processing and metering equivalent to the award winning D500</li>
                                        <li className="font-xs">Large 3.2" 922k dot, tilting Lcd screen with touch functionality. Temperature: 0 °c to 40 °c (32 °f to 104 °f) humidity: 85 percentage or less (no condensation)</li>
                                        <li className="font-xs">51 point AF system with 15 cross type sensors and group area AF paired with up to 8 fps continuous shooting capability</li>
                                        <li className="font-xs">Built in Wi-Fi and Bluetooth for easy connectivity through the Nikon snap bridge app</li>
                                    </ul>
                                </div>
                                <div className="box-quantity">
                                    <div className="form-quantity mr-10">
                                        <input className="input-quantity" type="text" defaultValue={1} /><span className="button-quantity button-up" /><span className="button-quantity button-down"> </span>
                                    </div><Link className="btn btn-brand-1 mr-10" href="#">Add To Cart</Link><Link className="btn btn-brand-1 btn-wish" href="#">
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 text-center mb-30">
                                <ThumbSlider />
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom bd-grey-80 mt-50" />
                </section>
                <section className="section mt-50 pt-50">
                    <div className="container">
                        <div className="bg-brand-1 box-cover-video">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/product/img-video.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Twice the fun</span>
                                        <h3 className="color-brand-2 mt-10 mb-15">Your camera's bridge to your world</h3>
                                        <p className="font-md color-white">The D3500 Two Lens Kit includes two matched lenses to help you cover all the angles. The AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR lens is great for portraits, landscapes, videos and other wide perspective shots. The AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED is a versatile telephoto zoom lens that's great for sports, concerts, nature and more.</p>
                                        <div className="box-button-video"><a className="btn btn-play font-sm-bold popup-youtube hover-up" onClick={() => setOpen(true)}>Play Video</a></div>
                                    </div>
                                </div>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default productDetails;
