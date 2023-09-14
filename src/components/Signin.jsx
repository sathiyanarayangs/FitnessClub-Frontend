import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { Link } from "react-router-dom";

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        const res = await fetch('https://fitness-club-server-o4xz.onrender.com/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else if (data.role === 'admin') {
            dispatch({ type: "ADMIN", payload: 2 });
            window.alert(data.message);
            navigate('/');
        } else {
            dispatch({ type: "MEMBER", payload: 1 });
            window.alert(data.message);
            navigate('/');
        }
    };

    return (
        <div className='login-bg' style={{ backgroundImage: 'url(img/bg-login.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 my-5 text-center">
                        <h2 className="my-4 text-white">Login</h2>
                        <div className="card p-3 mt-5 mx-auto" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            <form onSubmit={handleSubmit} method='POST'>
                                <div className="form-group py-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{ backdropFilter: 'blur(10px)' }}
                                    />
                                </div>
                                <div className="form-group py-2">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="text-center">
                                    <p>Not a member? <Link to="/signup" className='text-decoration-none' style={{ color: "#08d48c" }}>New User</Link></p>
                                </div>
                                <div className="py-2 text-center">
                                    <button type="submit" className="btn btn-primary btn-block border-0" style={{ backgroundColor: "#08d48c" }}>
                                        Login
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

export default Login;
