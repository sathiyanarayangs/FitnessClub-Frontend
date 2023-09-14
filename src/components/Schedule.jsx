import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Schedule = () => {
  const navigate = useNavigate();

  const [memberData, setMemberData] = useState({});
  const [courseDetails, setCourseDetails] = useState([]);

  const callAboutPage = async () => {
    try {
      const res = await fetch("https://fitness-club-server-o4xz.onrender.com/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (res.status !== 200) {
        throw new Error(res.error);
      }

      const data = await res.json();
      setMemberData(data);
    } catch (err) {
      console.log(err);
      // navigate('/signin');
    }
  };

  const fetchCourseDetails = async () => {
    try {
      const courseIds = memberData.courses.map((course) => course.classID);

      const coursePromises = courseIds.map(async (courseId) => {
        const res = await fetch("https://fitness-club-server-o4xz.onrender.com/getClassData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ courseID: courseId }) // Send each courseId separately
        });

        if (res.status !== 200) {
          throw new Error(res.error);
        }

        const data = await res.json();
        return data;
      });

      const courseDetailsData = await Promise.all(coursePromises);
      setCourseDetails(courseDetailsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  useEffect(() => {
    if (memberData.courses && memberData.courses.length > 0) {
      fetchCourseDetails();
    }
  }, [memberData]);

  return (
    <div style={{minHeight:'100vh'}}>
      <section className="breadcrumb-option" style={{ backgroundImage: "url('img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Registered Courses</h2>
                <div className="breadcrumb__widget">
                  <Link to="/" className='text-decoration-none'>Home</Link>
                  <span>Schedule</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row'>
          {courseDetails.length > 0 ? (
            courseDetails.map((course) => (

              <div className="col-lg-4 col-md-6 my-3" key={course._id}>
                <div className="card text-center">

                  <div className="card-body shadow">
                    <h5 className="card-title text-center">{course.title}</h5>
                    <div className="d-flex justify-content-between py-2">
                      <div className="card-text d-inline px-2"><i class="fa-sharp fa-regular fa-calendar-check" style={{ color: '#f4657d' }}></i> {course.days}</div>
                      <div className="card-text d-inline px-2"><i class="fa-regular fa-clock" style={{ color: '#f4657d' }}></i> {course.timing}</div>
                    </div>
                    <hr />
                    <div className="instructor-info d-flex justify-content-between px-3">
                      <div>
                        <div style={{ color: '#f4657d' }}>{course.instructorName}</div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>


              // <li key={course._id}>
              //   <div><strong>Course ID: </strong>{course.courseID}</div>
              //   <div><strong>Title: </strong>{course.title}</div>
              //   <div><strong>Days: </strong>{course.days}</div>
              //   <div><strong>Timings: </strong>{course.timing}</div>
              //   <div><strong>Trainer: </strong>{course.instructorName}</div>
              //   <br />
              // </li>
            ))
          ) : (
            <div className='display-5'>No Courses</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
