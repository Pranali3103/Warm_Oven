import React from "react";
import Logo from "../../assets/Logo-04.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="section1">
          <img src={Logo} alt="Logo" className="img" />
        </div>
        <div className="section2">
          <ul>
            <li>
              <Link to="/about" className="links">
                {" "}
                OUR STORY
              </Link>{" "}
            </li>
            <br/>
            <li>OUR PRODUCTS</li>
            <br/>
            <li>SPECIALITY CAKES</li>
          </ul>
        </div>

        <div className="section3">
          <ul>
            <li>ORDERS</li>
            <br />
            <li>OUR PRODUCTS</li>
            <br />
            <li>SPECIALITY CAKES</li>
          </ul>
        </div>

        <div className="section3">
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} className="material-symbols-outlined" style={{ fontSize: '16px', marginBottom: '5px' }} />
              <span style={{ marginLeft: "15px" }}>+91 123456789</span>
            </li>
<br/>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="material-symbols-outlined" style={{ fontSize: '16px', marginBottom: '5px' }} />
              <span style={{ marginLeft: "15px" }}>contact@warmovern.in</span>
            </li>
          </ul>
        </div>

        <div className="sectionl">
          <p>
            {" "}
            Stay in the loop with <br /> all the sweet news!
            <br /> Subscribe for updates.
          </p>
          <input type='email' placeholder="Email address"/>
        </div>
      </footer>
    </>
  );
};

export default Footer;
