import React from 'react';
import { NavLink } from 'react-router-dom';

const Carousel = () => {
    return (
        <div className='d-none d-md-block'>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{minHeight:'20vh'}}>
                    <div className="carousel-item active">
                        <img className="d-block w-100 dull-image" src="img/hero/hero-1.jpg" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block text-center mb-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  mx-auto">
                                        <div className="caption-content">
                                            <span>Welcome to Club</span>
                                            <h2>What hurts today makes you stronger tomorrow</h2>
                                            <NavLink to="/about" className="primary-btn text-decoration-none">DISCOVER MORE</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 dull-image" src="img/hero/hero-2.jpg" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block text-center mb-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  mx-auto">
                                        <div className="caption-content">
                                            <span>Welcome to Club</span>
                                            <h2>Once you are exercising regularly, the hardest thing is to stop it.</h2>
                                            <NavLink to="/about" className="primary-btn text-decoration-none">DISCOVER MORE</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 dull-image" src="img/hero/hero-3.jpg" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block text-center mb-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  mx-auto">
                                        <div className="caption-content">
                                            <span>Welcome to Club</span>
                                            <h2>There are two types of pain in this world: pain that hurts you, and pain that changes you.</h2>
                                            <NavLink to="/about" className="primary-btn text-decoration-none">DISCOVER MORE</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;
