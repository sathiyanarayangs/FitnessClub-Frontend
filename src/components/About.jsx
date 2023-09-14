import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <>
            <section className="breadcrumb-option" style={{ backgroundImage: "url('img/breadcrumb.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h2>About Us</h2>
                                <div className="breadcrumb__widget">
                                    <Link to="/" className='text-decoration-none'>Home</Link>
                                    <span>About Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about spad">
                <div className="container">
                    <div className="about__services">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <img src="img/about/af-1.png" alt="" />
                                    <h5>Flexibility Amplification</h5>
                                    <p>Unlock your body's potential with our specialized training programs designed to enhance your flexibility and improve your range of motion.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <img src="img/about/af-2.png" alt="" />
                                    <h5>Infinite Spring Stretch</h5>
                                    <p>Experience a never-ending season of vitality and energy as our fitness club helps you extend your endurance and maintain peak performance.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <img src="img/about/af-3.png" alt="" />
                                    <h5>Youthful Vitality Boost</h5>
                                    <p>Turn back the clock and defy the aging process with our comprehensive fitness services that promote longevity, strength, and overall well-being.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <img src="img/about/af-4.png" alt="" />
                                    <h5>Sculpted Transformation</h5>
                                    <p> Achieve your dream body through our tailored workouts and personalized guidance, sculpting a lean and toned physique which you desire.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 p-0">
                            <div className="about__pic">
                                <img src="img/about/about-page-pic.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 p-0">
                            <div className="about__text">
                                <div className="section-title">
                                    <img src="img/icon.png" alt="" />
                                    <h2>What We Do</h2>
                                    <p>To be invited to the nearest Fitness center and get free physical advice to learn more about the program.</p>
                                </div>
                                <div className="about__bar">
                                    <div className="about__bar__item">
                                        <p>Breathing</p>
                                        <div class="progress" style={{ height: "7px" }} >
                                            <div class="progress-bar" role="progressbar" style={{ width: "82%" }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="about__bar__item">
                                        <p>Metabolism</p>
                                        <div class="progress" style={{ height: "7px" }} >
                                            <div class="progress-bar" role="progressbar" style={{ width: "73%" }} aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="about__bar__item">
                                        <p>Flexibility</p>
                                        <div class="progress" style={{ height: "7px" }} >
                                            <div class="progress-bar" role="progressbar" style={{ width: "82%" }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="about__bar__item">
                                        <p>Stress Management</p>
                                        <div class="progress" style={{ height: "7px" }} >
                                            <div class="progress-bar" role="progressbar" style={{ width: "86%" }} aria-valuenow="86" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;
