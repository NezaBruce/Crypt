import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import {useGetCryptosQuery } from '../Services/cryptoApi';
import CryptoCurrencies from './Cryptocurrencies';
import News from './News'
// import Loader from './Loader'

const { Title }=Typography;
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    if (isFetching) return "Loading ...";
    // console.log(globalStats);
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={`$${millify(globalStats.totalMarketCap)}`}/></Col>
                <Col span={12}><Statistic title="Total 24 Volume" value={`$${millify(globalStats.total24hVolume)}`}/></Col>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptos in the world</Title>
                <Title level={3} className="showm-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <CryptoCurrencies simplified />
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="home-title"><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified/>
            <News simplified/>
            <News simplified/>
            <News simplified/>
            <News simplified/>
            <News simplified/>
        </>
    )
}

export default Homepage

//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart
//whendashboardendupworkstart