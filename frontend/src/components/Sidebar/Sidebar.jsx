import React from "react";
import "./Sidebar.css"; // Optional: CSS file for styling the sidebar

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar">
      <button onClick={closeSidebar}>Close</button>
  <ul className="sidebar-component">
         {/* <li><Link to="/"style={{ color:'#edc434',textDecoration:'none'}}>Home</Link></li>
       <li><Link to="/about" style={{ color:'#edc434',textDecoration:'none'}}>About</Link></li> Link to the About page */}
         <li>Services</li>
          <li>Orders</li>
       </ul>
    </div>
  );
};

export default Sidebar;
