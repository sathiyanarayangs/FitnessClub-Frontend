import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

const Home = () => {

  const [memberName, setMemberName] = useState('');

  const homePage = async () => {
    try {
      const res = await fetch("https://fitness-club-server-o4xz.onrender.com/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        // credentials: "include"
      });

      const data = await res.json();
      // console.log(data);
      setMemberName(data.name);

    } catch (err) {
      console.log(err);

    }
  };

  useEffect(() => {
    homePage();
  }, []);

  return (
    <>
      <Carousel />
      {/* <div className="container text-center mt-5">
        <p>Welcome</p>
        <h2>{memberName}</h2>
        <h3 className='mt-5'>Fitness Club</h3>
      </div> */}

      <div className='mb-5'>


        <section className="home-about spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-none d-lg-block">
                <div className="home__about__pic">

                  <div className="home__about__pic__item large-item set-bg" ><img src="img/about/about-1.jpg" alt="" /></div>
                  <div className="home__about__pic__item">
                    <div className="home__about__pic__item__inner set-bg" ><img src="img/about/about-2.jpg" alt="" /></div>
                    <div className="home__about__pic__item__inner set-bg" ><img src="img/about/about-3.jpg" alt="" /></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home__about__text">
                  <div className="section-title">
                    <img src="img/icon.png" alt="" />

                    <h2>Welcome {memberName}</h2>
                  </div>

                  <span>“What hurts today makes you stronger tomorrow.”</span>

                  <p>
                    The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.”
                  </p>


                  <p className="para-2">
                    Our Club offers a remarkable fitness experience with top-notch facilities and dedicated trainers. Enjoy access to state-of-the-art equipment and personalized training tailored to your goals. With diverse fitness programs and expert instructors, we cater to all fitness levels and interests. Join invigorating group classes or opt for one-on-one personal training sessions. Our gym features a functional training area and relaxation facilities for post-workout recovery. Get nutrition guidance and be part of a supportive community that shares your passion for a healthy lifestyle. Experience a great place for fitness, where you'll find cutting-edge equipment, personalized attention, and a motivating environment. Achieve your fitness goals with us today!

                  </p>
                  <Link to="/about" className="primary-btn text-decoration-none">MORE ABOUT US</Link>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <img src="img/icon.png" alt="" />
                  <h2>Transform Your Yoga Journey</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="services__list">
              <div className="row">
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-1.png" alt="" />
                    <h5>Flexibility</h5>
                    <p>Unlock your body's potential with specialized training programs designed to enhance your flexibility.</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-2.png" alt="" />
                    <h5>Strength</h5>
                    <p>Experience a never-ending season of vitality and energy as our yoga club helps you build strength.</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-3.png" alt="" />
                    <h5>Mindfulness</h5>
                    <p>Immerse yourself in the practice of meditation, finding inner peace and tranquility.</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-4.png" alt="" />
                    <h5>Breath Control</h5>
                    <p>Learn the art of pranayama, harnessing the power of breath to balance your energy.</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-5.png" alt="" />
                    <h5>Balance</h5>
                    <p>Discover the philosophy of yoga, incorporating ancient wisdom and principles into your modern lifestyle.</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-6.png" alt="" />
                    <h5>Alignment</h5>
                    <p>Master the art of proper alignment and body mechanics, ensuring a safe and effective yoga practice.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="chooseus spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="chooseus__text">
                  <h2>Why Choose Us</h2>
                  <p>With over a decade of experience in the fitness industry, we bring a wealth of knowledge and expertise to help you build a successful fitness club. Our team of certified trainers is dedicated to helping individuals achieve their fitness goals through personalized training programs and expert guidance.</p>
                </div>
                <div className="chooseus__item">
                  <div className="chooseus__item__icon">
                    <img src="img/chooseus/choose-1.png" alt="" />
                  </div>
                  <div className="chooseus__item__text">
                    <h2 className="choose-counter">2146</h2>
                    <p>Students</p>
                  </div>
                </div>
                <div className="chooseus__item">
                  <div className="chooseus__item__icon">
                    <img src="img/chooseus/choose-2.png" alt="" />
                  </div>
                  <div className="chooseus__item__text">
                    <h2 className="choose-counter">15</h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
                <div className="chooseus__item">
                  <div className="chooseus__item__icon">
                    <img src="img/chooseus/choose-3.png" alt="" />
                  </div>
                  <div className="chooseus__item__text">
                    <h2 className="choose-counter">48</h2>
                    <p>Branches</p>
                  </div>
                </div>
                <div className="chooseus__item">
                  <div className="chooseus__item__icon">
                    <img src="img/chooseus/choose-4.png" alt="" />
                  </div>
                  <div className="chooseus__item__text">
                    <h2 className="choose-counter">234</h2>
                    <p>Expert Staffs</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="chooseus__pic">
                  <img src="img/chooseus/choose-pic.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>





      </div>
    </>
  );
}


export default Home;
