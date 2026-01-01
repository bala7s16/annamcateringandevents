import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-padding section-padding">
            <div className="container contact-wrapper">
                <div className="contact-info">
                    <h1 className="page-title">Get in <span className="text-gold">Touch</span></h1>
                    <p className="mb-5">Ready to plan your event? Fill out the form or reach us directly.</p>

                    <div className="contact-details">
                        <div className="info-item">
                            <div className="icon-box"><Phone /></div>
                            <div>
                                <h5>Phone</h5>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail /></div>
                            <div>
                                <h5>Email</h5>
                                <p>info@annamcatering.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin /></div>
                            <div>
                                <h5>Location</h5>
                                <p>Chennai, Tamil Nadu</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" placeholder="Your Phone Number" />
                        </div>
                        <div className="form-group">
                            <label>Event Date</label>
                            <input type="date" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="4" placeholder="Tell us about your event..."></textarea>
                        </div>
                        <button type="submit" className="btn" style={{ width: '100%' }}>Send Enquiry</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
