import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typograph, Space } from 'antd';
import {Exchanges,Homepage,News,Crypocurrencies,CryptoDetails,Navbar} from './Components'
import './App.css';
function App() {
  return (
    <div className="App"> 
      <div className="navbar">
        <Navbar/>
  </div>
    </div>
  );
}

export default App;
