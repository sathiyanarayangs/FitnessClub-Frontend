import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const CoursePage = () => {
  const navigate = useNavigate();

  const { classID } = useParams();
  const [course, setCourse] = useState(null);
  const [trainer, setTrainer] = useState(null);

  const fetchCourse = async () => {
    try {
      const classRes = await fetch('https://fitness-club-server-o4xz.onrender.com/getClassData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseID: classID }),
      });

      if (classRes.status === 404) {
        navigate('/courseNotFound');
      }
      const classdata = await classRes.json();
      setCourse(classdata);

      const trainerRes = await fetch('https://fitness-club-server-o4xz.onrender.com/getTrainerData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trainerEmail: classdata.instructorEmail }), // Pass trainerID in the request body
      });

      const trainerdata = await trainerRes.json();
      setTrainer(trainerdata);

    } catch (err) {
      console.error('Error retrieving course:', err);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  if (!course || !trainer) {
    return <div style={{ height: '80vh' }}><h3 className='container mt-5 text-center'>Loading...</h3></div>;
  }


  //buying 
  const handleClick = async (e) => {
    const courseID = classID;

    const res = await fetch('https://fitness-club-server-o4xz.onrender.com/buyCourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseID
      }),
    });

    // Handle successful response
    const data = await res.json();

    if (res.status === 404) {
      window.alert("Need to login first");
      navigate('/signin');
    }
    else if (res.status === 400) {
      window.alert(data.message);
    }
    else if (res.status === 422 || !data) {
      window.alert("Some error occured");
      console.log("Some error occured");
    } else {
      window.alert('Purchase Successfull');
      console.log('Purchase Successfull');
    }
  };

  return (
    <>
      <section className="breadcrumb-option" style={{ backgroundImage: "url('img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Class Details</h2>
                <div className="breadcrumb__widget">
                  <Link to="/" className='text-decoration-none'>Home</Link>
                  <Link to="/classes" className='text-decoration-none'>Our Classes</Link>
                  <span>Class Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="classes-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="classes__sidebar">
                <div className="classes__sidebar__item classes__sidebar__item--info">
                  <h4>Classes Information</h4>

                  <ul className="classes__sidebar__item__widget ">
                    <li><span className="icon_calendar"></span>{course.days}</li>
                    <li><span className="icon_clock_alt"></span> {course.timing}</li>
                  </ul>
                  <ul className="classes__sidebar__item__id">

                    <li><span className="icon_id"></span> {trainer.email}</li>
                  </ul>

                  <button type="submit" className="sidebar-btn btn btn-outline-primary" onClick={handleClick} >
                    Buy Course
                  </button>
                </div>
                <div class="classes__sidebar__item">
                  <h4>About Instructor</h4>
                  <div class="classes__sidebar__instructor">
                    <div class="classes__sidebar__instructor__pic">
                      <img src={trainer.image} alt="" />
                    </div>
                    <div class="classes__sidebar__instructor__text">
                      <div class="classes__sidebar__instructor__title">
                        <h4>{trainer.name}</h4>
                        <span>{trainer.jobtitle}</span>
                      </div>
                      <p>{trainer.description}</p>
                      <div class="classes__sidebar__instructor__social">
                        <a href={trainer.fblink} className='text-decoration-none'><span className="social_facebook"></span></a>
                        <a href={trainer.instalink} className='text-decoration-none'><span class="social_instagram"></span></a>
                        <a href={trainer.twlink} className='text-decoration-none'><span className="social_twitter"></span></a>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-lg-8">
              <div class="classes__details">
                <div class="classes__details__large" style={{ width: "500px" }}>
                  <img src={course.image} alt="" />
                </div>
                <h2>{course.title}</h2>
                <ul class="classes__details__widget">
                  <li><span class="icon_calendar"></span>{course.days}</li>
                  <li><span class="icon_clock_alt"></span>{course.timing}</li>
                </ul>
                <p>{course.description}</p>
                <div class="classes__details__item">
                  <div class="row">
                    <div class="col-lg-4 col-md-4">
                      <img src="img/classes-details/cd-item-1.jpg" alt="" />
                    </div>
                    <div class="col-lg-8 col-md-8">
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <img src="img/classes-details/cd-item-2.jpg" alt="" />
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <img src="img/classes-details/cd-item-3.jpg" alt="" />
                        </div>
                      </div>
                      <img src="img/classes-details/cd-item-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="classes__details__desc ">
                  <h6>The Secret to improving her height to achieve quick result, If you are going to use a
                    passage of you need to be sure.</h6>
                  <ul>
                    <li><span class="icon_check"></span> All their equipment and instruments are alive.</li>
                    <li><span class="icon_check"></span> The that about to watched storm, so beautiful
                      terrific.</li>
                    <li><span class="icon_check"></span> There are many variations of passages of lorem
                      ppsum available.</li>
                    <li><span class="icon_check"></span> If you are going to use a passage of you need to be
                      sure.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className='container mt-5'>
        <h2>{course.title}</h2>
        <p><strong>Days: </strong>{course.days}</p>
        <p><strong>Timings: </strong>{course.timing}</p>
        <p><strong>Trainer Name: </strong>{trainer.name} ({trainer.jobtitle})</p>
        <p><strong>Email: </strong>{trainer.email}</p>
        <p><strong>About Trainer:</strong> {trainer.description}</p>
        <p><strong>Course Description:</strong> {course.description}</p>
        <button type="submit" className="btn btn-primary" onClick={handleClick} >
          Buy Course
        </button>
      </div> */}
    </>
  );
};

export default CoursePage;
