import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './../../App';
import { useNavigate } from 'react-router-dom';

const AddTrainer = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    if (state !== 2) {
      navigate('/');
    }
  }, []);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    jobtitle: '',
    instalink: '',
    fblink: '',
    twlink: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // function convertToBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
  //       if ((encoded.length % 4) > 0) {
  //         encoded += '='.repeat(4 - (encoded.length % 4));
  //       }
  //       resolve(encoded);
  //     };
  //     reader.onerror = error => reject(error);
  //   });
  // }

  // const handleImageChange = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);

  //   setFormData({ ...formData, image: base64 });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { name, email, phone, gender, jobtitle, instalink, fblink, twlink, description, image } = formData;
    const { name, email, phone, gender, jobtitle,
      instalink, fblink, twlink, description,image } = formData;

    const res = await fetch('https://fitness-club-server-o4xz.onrender.com/addtrainer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        gender,
        jobtitle,
        instalink,
        fblink,
        twlink,
        description,
        image
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
        name: '',
        email: '',
        phone: '',
        gender: '',
        jobtitle: '',
        instalink: '',
        fblink: '',
        twlink: '',
        description: '',
        image: ''
      });
    }
  };


  return (
    <div className="container mb-5">
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3 ">
          <h2 className="mb-4">Add Trainer</h2>
          <div className="card p-3 shadow">
            <form method='POST'>
              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <select
                  className="form-control"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="jobtitle"
                  placeholder="Job Title"
                  value={formData.jobtitle}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="instalink"
                  placeholder="Instagram Handle"
                  value={formData.instalink}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="fblink"
                  placeholder="Facebook Handle"
                  value={formData.fblink}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="twlink"
                  placeholder="Twitter Handle"
                  value={formData.twlink}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  placeholder="Image Link"
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

              

              {/* <div className="form-group py-2">
                <label htmlFor="file" className="form-control border-0">
                  Add Trainer's Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div> */}

              <div className="py-2">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Add Trainer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTrainer;
