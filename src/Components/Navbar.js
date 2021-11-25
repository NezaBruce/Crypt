import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
// import icon from '../images/cryptocurrency.png'
const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreensize] = useState(undefined);
    useEffect(() => {
        const handleResize = () => setScreensize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);
    return (
      <>
        <div className="nav-container">
          <div className="logo-container">
            {/* <Avatar src={icon} size="large"></Avatar> */}
            <Typography.Title level={2} className="logo">
              <Link to="/">Cryptocurrency</Link>
            </Typography.Title>
            <Button
              className="menu-control-container"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <MenuOutlined />
            </Button>
          </div>
          {activeMenu && (
            <Menu theme="dark">
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrency">cryptocurrency</Link>
              </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchange">exchange</Link>
              </Menu.Item>
              <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">news</Link>
              </Menu.Item>
            </Menu>
          )}
        </div>
      </>
    );
}

export default Navbar
