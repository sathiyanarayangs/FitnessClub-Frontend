import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [memberData, setMemberData] = useState({ name: "", email: "", phone: "", message: "" });

  const memberContact = async () => {
    try {
      const res = await fetch("https://fitness-club-server-o4xz.onrender.com/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      // console.log(data);
      setMemberData({ ...memberData, name: data.name, email: data.email, phone: data.phone });

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // navigate('/signin');
    }
  };

  useEffect(() => {
    memberContact();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMemberData({ ...memberData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://fitness-club-server-o4xz.onrender.com/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(memberData)
    });

    const data = await res.json();

    if (!data || res.status!==201) {
      alert(data.message)
      console.log("Message not sent");
    } else {
      alert(data.message);
      setMemberData({ ...memberData, message: "" });
    }
  };

  return (
    <>
      <section className="breadcrumb-option" style={{ backgroundImage: "url('img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Contact US</h2>
                <div className="breadcrumb__widget">
                  <Link to="/" className='text-decoration-none'>Home</Link>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            <div class="leave__comment__text">
              <h2>Leave a Comment</h2>
            </div>
            <div className="card p-3 shadow">
              <form method='POST' onSubmit={handleSubmit}>
                <div className="form-group py-2">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    value={memberData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group py-1">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    value={memberData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group py-1">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={memberData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group py-1">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={memberData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="py-1 text-center">
                  <button type="submit" className="site-btn ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
