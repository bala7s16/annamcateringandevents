import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">Annam Catering and Events</h3>
                    <p>
                        Annam Catering & Events is a featured brand of <span className="text-gold font-bold">Kitchen Kreatives</span>, an established catering and food services company founded in 2021.Supported by a strong foundation, experienced professionals, and refined processes, we specialize in delivering exceptional South Indian catering experiences for weddings, corporate events, and private celebrations across Tamil Nadu.
                    </p>
                </div>



                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li className="contact-item">
                            <Phone size={18} /> <span>+91 99527 48744</span>
                        </li>
                        <li className="contact-item">
                            <Mail size={18} /> <span>info@annamcateringandevents.com</span>
                        </li>
                        <li className="contact-item">
                            <MapPin size={18} /> <span>Chennai, Tamil Nadu</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://www.instagram.com/annamcateringevents/" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram /></a>
                        <a href="#" className="social-icon"><Facebook /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} Annam Catering and Events. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
