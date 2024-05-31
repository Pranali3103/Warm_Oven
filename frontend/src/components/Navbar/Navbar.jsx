import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo-04.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar'; 
import Overlay from '../Overlay/Overlay';

const Navbar = () => {
  // const [scrolled, setScrolled] = useState(false);
  const[showSidebar,setShowSidebar]=useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     const threshold = 10; // Adjust this threshold as needed
  //     setScrolled(offset > threshold);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const toggleSidebar=()=>{
    setShowSidebar(!showSidebar)
  }

  const closeSidebar=()=>{
    setShowSidebar(false)
  }

  return (
    <>
    <nav className='navbar'>
      <div className="maincontent">
      <Link to='/'><img src={Logo} alt="logo" className="img" /></Link>  

      <FontAwesomeIcon 
            icon={faBars} 
            style={{ marginLeft: '1190px', width: '40px', height: '30px', marginTop: '0px', cursor: 'pointer' }} 
            onClick={toggleSidebar} 
          />
      </div>
    </nav>
    {showSidebar && <Overlay closeOverlay={closeSidebar} />}
     {showSidebar && <Sidebar closeSidebar={closeSidebar} />}
     </>
  );

}

export default Navbar;

