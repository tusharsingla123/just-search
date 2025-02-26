import React from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button id="primary-nav-button" type="button">Menu</button>
                        <Link to="#">
                            <div className="logo">
                            </div>
                        </Link>
                        <nav id="primary-nav" className="dropdown cf">
                            <ul className="dropdown menu">
                                <li className='active'><Link to="/">Home</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                                <li><Link to="/Register">Register</Link></li>
                                <li><Link to="/Profile">PROFILE</Link></li>
                                <li><Link to="/ALLProfile">ALLPROFILE</Link></li>
                                <li><Link className="scrollTo" data-scrollto="contact" to="Contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav;