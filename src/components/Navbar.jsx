import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut, FiLogIn } from 'react-icons/fi';

import { UserContext } from '../App';

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' },
        { to: '/schedule', text: 'Schedule' },
        { to: '/contact', text: 'Contact' },
        { to: '/classes', text: 'Classes' },
        { to: '/trainers', text: 'Trainers' },
    ];

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark  px-3">
                <NavLink className='navbar-brand' to="/">Fitness Club</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-between ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    {
                        state === 2 ?
                            (<ul className="navbar-nav mr-auto">
                                <li className="nav-item mx-2" >
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className='nav-link'
                                        to="/users"
                                        onClick={handleMenuItemClick}
                                    >
                                        Users
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2" >
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className='nav-link'
                                        to="/trainers"
                                        onClick={handleMenuItemClick}
                                    >
                                        Trainers
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2" >
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className='nav-link'
                                        to="/viewtrainers"
                                        onClick={handleMenuItemClick}
                                    >
                                        Trainer Data
                                    </NavLink>
                                </li>

                                <li className="nav-item mx-2" >
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className='nav-link'
                                        to="/addtrainer"
                                        onClick={handleMenuItemClick}
                                    >
                                        Add Trainer
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2" >
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className='nav-link'
                                        to="/classes"
                                        onClick={handleMenuItemClick}
                                    >
                                        Classes
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2" >
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className='nav-link'
                                        to="/addclasses"
                                        onClick={handleMenuItemClick}
                                    >
                                        Add Classes
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2" >
                                    <NavLink
                                        exact
                                        activeClassName="active"
                                        className='nav-link'
                                        to="/messages"
                                        onClick={handleMenuItemClick}
                                    >
                                        Messages
                                    </NavLink>
                                </li>
                            </ul>) :
                            (<ul className="navbar-nav mr-auto">
                                {navLinks.map((link, index) => (
                                    <li className="nav-item mx-3" key={index}>
                                        <NavLink
                                            exact
                                            activeClassName="active"
                                            className='nav-link'
                                            to={link.to}
                                            onClick={handleMenuItemClick}
                                        >
                                            {link.text}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>)
                    }

                    {state === 0 ? (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-1 ">
                                <NavLink exact className="nav-link" to="/signin">
                                    Login <FiLogIn />
                                </NavLink>
                            </li>
                            <li className="nav-item px-1">
                                <NavLink exact className="nav-link" to="/signup">
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/logout">
                                    Log Out <FiLogOut />
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
