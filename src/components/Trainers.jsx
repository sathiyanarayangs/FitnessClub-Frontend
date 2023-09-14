import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import Trainer1Image from '../assets/trainer/1.png';
// import Trainer2Image from '../assets/trainer/2.png';
// import Trainer3Image from '../assets/trainer/3.png';
// import Trainer4Image from '../assets/trainer/4.png';


const Trainer = () => {
  const [trainerData, setTrainerData] = useState({});

  const callTrainerPage = async () => {
    try {
      const res = await fetch("https://fitness-club-server-o4xz.onrender.com/getTrainers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      // console.log(data);
      setTrainerData(data);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callTrainerPage();
  }, []);

  return (
    <div className='mb-5' style={{ minHeight: '100vh' }}>
    <section className="breadcrumb-option" style={{ backgroundImage: "url('img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Our Trainers</h2>
                <div className="breadcrumb__widget">
                  <Link to="/" className='text-decoration-none'>Home</Link>
                  <span>Trainers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container align-items-center'>
        <div className=" mt-4">
          <p>Discover our talented team of trainers.</p>
        </div>
        <div className="row">
          {Object.values(trainerData).map((trainer, index) => {
            return (
              <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 my-3">
                <div className="card">
                  <img src={trainer.image} className="card-img-top mx-auto rounded-circle" style={{ width: '15rem', height: '18rem' }} alt={trainer.name} />
                  <div className="card-body shadow">
                    <h5 className="card-title">{trainer.name}</h5>
                    <h6 className="card-subtitle mb-2 " style={{ color: '#f4657d' }}>{trainer.jobtitle}</h6>
                    <p className="card-text" >{trainer.description}</p>
                    <div>
                      <a href={trainer.fblink} className="btn btn-link social-icon">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                      <a href={trainer.twlink} className="btn btn-link social-icon text-info">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href={trainer.instalink} className="btn btn-link social-icon text-danger">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trainer;
