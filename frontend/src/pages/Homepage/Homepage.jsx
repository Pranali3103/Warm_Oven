import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CakeImage from "../../assets/cake-02.png"; // Import the image
import Photo from "../../assets/left-side-heading.png";
import "./Homepage.css";
import Footer from "../../components/Footer/Footer";
const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />

      <div className="left-side">
        <h1 className="left-side-heading">
          {" "}
          Delight in every bite,<br/> cake makes everything right.
        </h1>
        <p className="left-side-para">
          In the rush of modern life, there are precious moments when time
          <br /> seems to stand still. These moments are often found in simple
          <br /> pleasures, like savoring the aroma and taste of freshly baked
          goods <br /> from our bakery. Experience these timeless moments with
          our <br />
          delectable cakes and pastries,crafted with love and care just for you
          <br /> at{" "}
          <span
            style={{
              backgroundColor: "#edc434",
              color: "#240404",
              fontWeight: "bold",
            }}
          >
            WARMOVEN.
          </span>
        </p>
        {/* <p>Our Story</p> */}
  
      </div>
    </div>
  );
};

export default Homepage;
