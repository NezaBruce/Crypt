import React from 'react';
import './dashboard.css';
import Card from './card.js';
const Dashboard = () => {
    return (
      <div className="dashboard">
        <div className="dash_sidenav LeftMenu">
                leftmenu
        </div>
        <div className="dash_main">
                why main
                <Card/>
        </div>
        <header className="dash_rightnav">
                rightmenu
        </header>
        {/* <div className="dash_footer">hi there</div> */}
      </div>
    );
};

export default Dashboard;
