import { ChefHat, PartyPopper, Users, CalendarCheck, Utensils, Heart, Award, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const offerings = [
        { icon: Utensils, title: "South Indian Vegetarian", desc: "Authentic traditional vegetarian feasts." },
        { icon: ChefHat, title: "Non-Vegetarian Catering", desc: "Delicious non-veg dishes available on request." },
        { icon: PartyPopper, title: "Wedding & Engagement", desc: "Making your special days unforgettable." },
        { icon: Users, title: "Housewarming & Family", desc: "Warm hospitality for intimate gatherings." },
        { icon: CalendarCheck, title: "Corporate Events", desc: "Professional service for office functions." },
        { icon: Star, title: "Religious & Festivals", desc: "Pure and traditional preparation." },
        { icon: Heart, title: "Custom Menu Planning", desc: "Tailored specifically to your preferences." },
        { icon: Award, title: "Live Counters", desc: "Interactive stations and traditional serving." }
    ];

    return (
        <div className="page-padding section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="section-title">Our <span className="text-gold">Services</span></h1>
                    <p className="page-subtitle">
                        We bring the finest culinary experiences to your events, ensuring every guest leaves with a smile. From intimate gatherings to grand celebrations, we handle it all with perfection.
                    </p>
                </div>

                <div className="services-grid-new fade-in">
                    {offerings.map((item, idx) => (
                        <ServiceCard key={idx} icon={item.icon} title={item.title} description={item.desc} />
                    ))}
                </div>

                <div className="text-center mt-5">
                    <p className="mb-4">Standard Service Includes: Uniformed staff, mineral water, hygienic serving, and post-event cleanup.</p>
                    <Link to="/contact" className="btn">Book A Service</Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
