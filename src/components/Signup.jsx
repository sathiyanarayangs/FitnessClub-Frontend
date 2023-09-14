import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        weight: '',
        height: '',
        age: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name,
            email,
            phone,
            gender,
            weight,
            height,
            age,
            password,
            confirmPassword } = formData;

        const res = await fetch('https://fitness-club-server-o4xz.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                gender,
                weight,
                height,
                age,
                password,
                confirmPassword
            }),
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert('Invalid Registration');
            console.log('Invalid Registration');
        } else {
            window.alert('Registration Successful');
            console.log('Registration Successful');
            navigate('/signin');
        }
    };

    return (
        <div className='login-bg' style={{ backgroundImage: 'url(img/bg-login.jpg)' }} >
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h2 className="my-4 text-white">Signup</h2>
                        <div className="card p-3 " style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            <form method='POST' >
                                <div className="form-group ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    />
                                </div>

                                <div className="form-group ">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    />
                                </div>

                                <div className="form-group">
                                    <select
                                        className="form-control"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    >
                                        <option className='text-black' value="">Select Gender</option>
                                        <option className='text-black' value="male">Male</option>
                                        <option className='text-black' value="female">Female</option>
                                        <option className='text-black' value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group ">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="weight"
                                        placeholder="Weight in Kg"
                                        value={formData.weight}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="height"
                                        placeholder="Height in cm"
                                        value={formData.height}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="age"
                                        placeholder="Age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    />
                                </div>

                                <div className="form-group " >
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}
                                    />
                                </div>

                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary btn-block border-0 " style={{ backgroundColor: "#08d48c", width: '50%' }} onClick={handleSubmit}>
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
