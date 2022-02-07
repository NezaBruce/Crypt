import React from 'react';
import './dashboard.css';

const Dashboard = () => {
    return (
      <div className="dashboard">
        <div className="dash_sidenav LeftMenu">
                leftmenu
        </div>
        <div className="dash_main">
            why main
        </div>
        <header className="dash_rightnav">
                rightmenu
        </header>
        {/* <div className="dash_footer">hi there</div> */}
      </div>
    );
};

export default Dashboard;
