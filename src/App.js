import React from 'react';
import { Route, Link,Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Exchanges,Homepage,News,Cryptocurrencies,CryptoDetails,Navbar} from './Components'
import './App.css';
// import Dashboard from './min/Dashboard';
// import { Typography }  from '@mui/material';
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      {/* <Dashboard/> */}

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/exchanges" element={<Exchanges/>}/>
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
              <Route exact path="/news" element={<News/>}/>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color:'white',textAlign:'center'}}>
            Copyright © 2021
          </Typography.Title>
          <Space>
            
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
           </Space>
        </div>
    </div>
  </div>
      );
}
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }
// overlay_circle{
//   z - indeex
//   position absolute
// }

export default App;
