import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="about-veno">
                            <div className="logo">
                            </div>
                            <p>Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellus, id efficitur leo. In hac habitasse platea dictumst.</p>
                            <ul className="social-icons">
                                <li>
                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                    <Link to="#"><i className="fa fa-Linkedin"></i></Link>
                                    <Link to="#"><i className="fa fa-rss"></i></Link>
                                    <Link to="#"><i className="fa fa-dribbble"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="useful-Links">
                            <div className="footer-heading">
                                <h4>Useful Links</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-stop"></i>Help FAQs</Link></li>
                                        <li><Link to="#"><i className="fa fa-stop"></i>Register</Link></li>
                                        <li><Link to="#"><i className="fa fa-stop"></i>Login</Link></li>
                                        <li><Link to="#"><i className="fa fa-stop"></i>My Profile</Link></li>
                                        <li><Link to="#"><i className="fa fa-stop"></i>How It Works?</Link></li>
                                        <li><Link to="#"><i className="fa fa-stop"></i>More About Us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-stop"></i>Our Clients</Link></li>
                                        <li><Link to="#"><i className="fa fa-stop"></i>Partnerships</Link></li>
                                        <li><Link to="#"><i className="fa fa-stop"></i>Blog Entries</Link></li>
                                        <li><Link to="#"><i className="fa fa-stop"></i>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contact-info">
                            <div className="footer-heading">
                                <h4>Contact Information</h4>
                            </div>
                            <p>Praesent iaculis gravida elementum. Proin fermentum neque facilisis semper pharetra. Sed vestibulum vehicula tincidunt.</p>
                            <ul>
                                <li><span>Phone:</span><Link to="#">010-050-0550</Link></li>
                                <li><span>Email:</span><Link to="#">hi@company.co</Link></li>
                                <li><span>Address:</span><Link to="#">company.co</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;