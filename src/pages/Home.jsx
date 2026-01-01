import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Short Version / Intro */}
            <section className="section-padding text-center container">
                <p className="intro-text fade-in mb-4">
                    <span className="text-gold" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Annam Catering and Events</span> offers premium catering services specializing in authentic South Indian cuisine. Serving across Tamil Nadu, we bring taste, tradition, and trust to every event.
                </p>

                <div className="parent-brand-section fade-in mb-5">
                    <p className="text-muted small-tracking mb-3">A Proud Unit of</p>
                    <img src="/images/kitchen-kreatives-logo.jpg" alt="Kitchen Kreatives" className="parent-logo" />
                </div>
                <Link to="/services" className="btn btn-outline">Explore Our Services</Link>
            </section>

        </main>
    );
};

export default Home;
