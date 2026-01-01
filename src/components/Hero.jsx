import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <h1 className="hero-title">
                        Experience the <span className="text-gold">Divine Taste</span> of Tradition
                    </h1>
                    <p className="hero-subtitle">
                        Annam Catering and Events brings you authentic, premium culinary experiences for weddings, corporate events, and grand celebrations.
                    </p>
                    <div className="hero-actions">
                        <Link to="/menu" className="btn">View Menu</Link>
                        <Link to="/contact" className="btn btn-outline">Book Enquiry</Link>
                    </div>
                </div>
                <div className="hero-image fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="image-wrapper">
                        <img src="/images/hero-feast.png" alt="Grand South Indian Feast" />
                        <div className="image-accent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
