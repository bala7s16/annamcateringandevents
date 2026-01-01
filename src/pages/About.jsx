import { CalendarCheck, ChefHat, Users, Utensils, Heart, Award, Star } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="page-padding section-padding">
            <div className="container">
                {/* Company Profile */}
                <section className="mb-5">
                    <div className="grid-2">
                        <div className="about-content fade-in">
                            <h1 className="section-title">About <span className="text-gold">Us</span></h1>
                            <p className="mb-4">
                                Annam Catering and Events is a professional catering service dedicated to delivering authentic, delicious, and high-quality food for all occasions. Rooted in traditional South Indian flavors, we specialize in crafting memorable dining experiences using fresh ingredients, hygienic preparation, and time-honored recipes.
                            </p>
                            <p>
                                With a passion for taste and presentation, we cater to weddings, engagements, house functions, corporate events, religious functions, and special celebrations across Tamil Nadu. Our experienced team ensures timely service, customized menus, and complete customer satisfaction.
                            </p>
                            <blockquote className="quote-box mt-4">
                                "At Annam Catering and Events, food is not just served—it is celebrated."
                            </blockquote>
                        </div>
                        <div className="about-image-wrapper fade-in">
                            <img src="/images/catering-service.png" alt="Annam Catering and Events" className="rounded-img" />
                        </div>
                    </div>
                </section>

                {/* Team & Culinary Expertise */}
                <section className="section-padding bg-light rounded-2xl mb-5">
                    <div className="text-center mb-4">
                        <h2 className="section-title">Our <span className="text-gold">Team & Culinary Expertise</span></h2>
                    </div>
                    <div className="grid-2 align-center">
                        <div className="fade-in">
                            <p className="mb-4">
                                At Annam Catering & Events, our excellence extends beyond catering. Backed by a dedicated team of 7 seasoned culinary and hospitality professionals, we offer comprehensive solutions for hotels, restaurants, and large-scale food operations.
                            </p>
                            <p>
                                Led by chefs with <span className="font-bold">10 to 18 years of industry experience</span>, including exposure to international kitchens, overseas operations, and cruise line environments, our team delivers global standards in kitchen management, operational efficiency, and culinary execution—while remaining rooted in authentic South Indian traditions.
                            </p>
                        </div>
                        <div className="about-image-wrapper fade-in">
                            {/* Placeholder for team image or kitchen */}
                            <div className="feature-card h-full flex flex-col justify-center align-center">
                                <ChefHat size={64} className="text-gold mb-3 mx-auto" style={{ display: 'block' }} />
                                <h3 className="text-center">Global Experience, Local Roots</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hospitality Consulting */}
                <section className="section-padding mb-5">
                    <h2 className="section-title text-center mb-5">Hospitality Consulting & <span className="text-gold">Kitchen Solutions</span></h2>
                    <div className="consulting-content">
                        <p className="text-center mb-5 max-w-3xl mx-auto">
                            We provide end-to-end professional support tailored to the needs of hotels, restaurants, and institutional kitchens. Our consulting approach combines practical experience with strategic planning—ensuring efficiency, consistency, and long-term sustainability.
                        </p>

                        <div className="features-grid centered-grid">
                            <div className="feature-item"><span className="check-icon">✔</span> Kitchen Consulting & Operational Advisory</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Commercial Kitchen Setup & Planning</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Hotel & Restaurant Kitchen Setup</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Kitchen Staff Recruitment & Professional Training</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Standard Operating Procedures (SOP) Development</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Menu Engineering & Menu Planning</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Food Costing & Cost Control Systems</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Workflow Optimization & Hygiene Standards</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Pre-Opening Support for Hotels & Restaurants</div>
                            <div className="feature-item"><span className="check-icon">✔</span> Ongoing Operational Support & Performance Review</div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="section-padding">
                    <div className="vision-mission-grid">
                        <div className="vm-card">
                            <h3>Our <span className="text-gold">Vision</span></h3>
                            <p>To become a trusted and preferred catering brand known for quality, authenticity, and exceptional service.</p>
                        </div>
                        <div className="vm-card">
                            <h3>Our <span className="text-gold">Mission</span></h3>
                            <ul>
                                <li>To serve delicious and hygienic food using premium ingredients</li>
                                <li>To preserve traditional South Indian flavors while meeting modern tastes</li>
                                <li>To provide reliable, professional, and customer-friendly service</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section-padding">
                    <div className="text-center">
                        <h2 className="section-title mb-5">Why <span className="text-gold">Choose Us</span></h2>
                        <div className="features-grid centered-grid">
                            <div className="feature-item">
                                <span className="check-icon">✔</span> Authentic South Indian Taste
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✔</span> Experienced Cooking Team
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✔</span> Fresh & Quality Ingredients
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✔</span> Hygienic Preparation
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✔</span> Timely & Professional Service
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✔</span> Custom Menus as per Budget
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
