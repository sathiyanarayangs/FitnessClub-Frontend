import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Classes = () => {

  const [classesData, setClassesData] = useState({});

  const callClassesPage = async () => {
    try {
      const res = await fetch("https://fitness-club-server-o4xz.onrender.com/getClasses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      // console.log(data);
      setClassesData(data);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callClassesPage();
  }, []);


  //Booking

  const navigate = useNavigate();

  const handleBook = async (title) => {
    navigate(`/classes/${title}`);
  };

  return (
    <div className='mb-5' style={{ minHeight: '100vh' }}>
      <section className="breadcrumb-option" style={{ backgroundImage: "url('img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Our Classes</h2>
                <div className="breadcrumb__widget">
                  <Link to="/" className='text-decoration-none'>Home</Link>
                  <span>Classes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="mt-4">
          <p>Experience a wide range of yoga classes designed for all levels, from gentle flows to powerful vinyasa sequences, and discover the transformative benefits of yoga.</p>
        </div>

        <div className="row">
          {Object.values(classesData).map((classes, index) => (
            <div className="col-lg-4 col-md-6 my-3" key={index}>
              <div className="card text-center">
                <img src={classes.image} className="card-img-top my-3 mx-auto rounded-circle" style={{ width: '18rem', height: '18rem' }} alt={` Pic ${index + 1}`} />
                <div className="card-body shadow">
                  <h5 className="card-title text-center">{classes.title}</h5>
                  <div className="d-flex justify-content-between py-2">
                    <div className="card-text d-inline px-2"><i class="fa-sharp fa-regular fa-calendar-check" style={{ color: '#f4657d' }}></i> {classes.days}</div>
                    <div className="card-text d-inline px-2"><i class="fa-regular fa-clock" style={{ color: '#f4657d' }}></i> {classes.timing}</div>
                  </div>
                  <hr />
                  <div className="instructor-info d-flex justify-content-between px-3">
                    <div>
                      <div>{classes.instructorName}</div>
                      <div style={{ color: '#f4657d' }}>{classes.instructorJobtitle}</div>
                    </div>
                    <div>
                      <button className="btn btn-outline-primary" onClick={() => handleBook(classes.courseID)}>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
