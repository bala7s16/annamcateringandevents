import { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('South Indian');

    const categories = ['South Indian', 'North Indian', 'Chinese', 'Desserts'];

    const menuItems = {
        'South Indian': [
            { name: 'Traditional Elai Sappadu', desc: 'Rice, Sambar, Rasam, Kootu, Poriyal, Appalam, Pickle, and Sweet' },
            { name: 'Chettinad Chicken Biryani', desc: 'Aromatic seeraga samba rice cooked with authentic Chettinad spices' },
            { name: 'Mutton Chukka', desc: 'Spicy dry mutton roast with curry leaves' },
            { name: 'Vegetable Kurma', desc: 'Mixed vegetables in a coconut-based curry' }
        ],
        'North Indian': [
            { name: 'Butter Naan & Paneer Butter Masala', desc: 'Soft butter naan served with rich creamy paneer gravy' },
            { name: 'Tandoori Platter', desc: 'Assorted tandoori chicken, kebabs, and tikka' },
            { name: 'Dal Makhani', desc: 'Slow-cooked black lentils with butter and cream' }
        ],
        'Chinese': [
            { name: 'Schezwan Fried Rice', desc: 'Spicy fried rice with mixed vegetables and schezwan sauce' },
            { name: 'Gobi Manchurian', desc: 'Crispy cauliflower florets tossed in tangy soya garlic sauce' },
            { name: 'Chilly Chicken', desc: 'Battered chicken tossed with onions and green chillies' }
        ],
        'Desserts': [
            { name: 'Gulab Jamun', desc: 'Deep-fried milk solids soaked in sugar syrup' },
            { name: 'Mysore Pak', desc: 'Rich ghee-laden gram flour fudge' },
            { name: 'Ice Cream with Fruit Salad', desc: 'Vanilla ice cream served with fresh seasonal fruits' }
        ]
    };

    return (
        <div className="page-padding section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="page-title">Our <span className="text-gold">Menu</span></h1>
                    <p className="page-subtitle">A glimpse of our culinary masterpieces. We customize menus to suit your specific tastes.</p>
                </div>

                <div className="menu-categories">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="menu-grid fade-in">
                    {menuItems[activeCategory].map((item, index) => (
                        <div key={index} className="menu-item-card">
                            <h3 className="menu-item-name">{item.name}</h3>
                            <div className="menu-item-divider"></div>
                            <p className="menu-item-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
