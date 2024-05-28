import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo-04.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 10; // Adjust this threshold as needed
      setScrolled(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="maincontent">
      <Link to='/'><img src={Logo} alt="logo" className="img" /></Link>  
        <ul className="nav-components">
          <li><Link to="/"style={{ color:'#edc434',textDecoration:'none'}}>Home</Link></li>
          <li><Link to="/about" style={{ color:'#edc434',textDecoration:'none'}}>About</Link></li> {/* Link to the About page */}
          <li>Services</li>
          <li>Orders</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
