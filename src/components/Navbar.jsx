import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import './Navbar.css'; // We'll create this or put styles in index.css

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <UtensilsCrossed className="logo-icon" />
          <div className="flex flex-col">
            <span>Annam Catering and Events</span>
          </div>
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active-link' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mobile-only">
            <Link to="/contact" className="btn btn-outline" onClick={() => setIsOpen(false)}>Book Now</Link>
          </li>
        </ul>

        <div className="navbar-cta desktop-only">
          <Link to="/contact" className="btn btn-outline">Book Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
