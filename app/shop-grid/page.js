import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout/Layout';

const shopGrid = () => {
    return (
        <>
            <Layout>
                <section className="section bg-7 box-banner-shop-grid">
                    <div className="container">
                        <div className="banner-shop-grid"> <span className="font-xl-bold color-grey-300 text-uppercase">camera collection</span>
                            <h2 className="color-brand-1 mt-15 mb-60 font-bold-800">Ready to capture every <br className="d-none d-lg-block" />wonderful moment</h2>
                            <ul className="list-categories">
                                <li> <Link className="btn btn-white-circle active" href="#">Digital Cameras</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Mirrorless Camera</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Camera Flashes</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Travel Camera</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Instant Camera</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Accessories</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-start align-items-md-center">
                            <div className="col-lg-3 col-md-2 col-sm-3 col-3 pr-0"><Link className="filter-link btn-grid" href="shop-grid"> </Link><Link className="filter-link btn-list" href="shop-list"> </Link></div>
                            <div className="col-lg-9 col-md-10 col-sm-9 col-9 text-end">
                                <div className="d-inline-block">
                                    <div className="d-flex align-items-center box-filter-text"><span className="text-showing font-md color-grey-500 d-inline-block mr-40">Showing 1–16 of 17 results </span>
                                        <div className="box-sortby d-flex align-items-center"><span className="font-md color-grey-200 d-inline-block mr-10">Sort by:</span>
                                            <div className="dropdown dropdown-sort border-1-right">
                                                <button className="btn dropdown-toggle font-sm color-gray-900 font-medium" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false">Latest products</button>
                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort" style={{ margin: 0 }}>
                                                    <li><Link className="dropdown-item active" href="#">Latest products</Link></li>
                                                    <li><Link className="dropdown-item" href="#">Oldest products</Link></li>
                                                    <li><Link className="dropdown-item" href="#">Comments products </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp1.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
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

export default shopGrid;
