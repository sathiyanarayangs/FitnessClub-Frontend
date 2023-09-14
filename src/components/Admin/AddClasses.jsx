import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './../../App';
import { useNavigate } from 'react-router-dom';

const AddClasses = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    if (state !== 2) {
      navigate('/');
    }
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    days: '',
    timing: '',
    instructorEmail: '',
    image: '',
    description:'',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, days, timing, instructorEmail, image,description } = formData;

    const res = await fetch('https://fitness-club-server-o4xz.onrender.com/addclasses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        days,
        timing,
        instructorEmail,
        image,
        description
      }),
    });

    // Handle successful response
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      window.alert('Registration Successful');
      console.log('Registration Successful');
      setFormData({
        title: '',
        days: '',
        timing: '',
        instructorEmail: '',
        image: '',
        description:''
      });
    }
  };


  return (
    <div className="container mb-5">
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3 ">
          <h2 className="mb-4">Add Class</h2>
          <div className="card p-3 shadow">
            <form method='POST'>
              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="days"
                  placeholder="Days"
                  value={formData.days}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="timing"
                  placeholder="Timing"
                  value={formData.timing}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="email"
                  className="form-control"
                  name="instructorEmail"
                  placeholder="Instructor Email"
                  value={formData.instructorEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  placeholder="Course Image Link"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="py-2">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddClasses;