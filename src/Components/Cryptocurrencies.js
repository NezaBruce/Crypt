import React, { useEffect,useState } from 'react'
import millify from "millify";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../Services/cryptoApi";
import Loader from './Loader.js';
const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState();
    const [searchItem, setSarchItem] = useState('');
    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);
        const filtereData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchItem));
        setCryptos(filtereData);
    }, [cryptosList, searchItem]);
    if (isFetching) return <Loader/>;
    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="search cryptocurrency " onChange={(e) => setSarchItem(e.target.value.toLowerCase())} />
                </div>
            )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link key={currency.id} to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable>
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>            
                {/* <Row gutter={[32, 32]} className="crypto-card-container">
                    {cryptos?.map((currency) => (
<Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                            <Link key={currency.id} to={`/crypto/${currency.id}`}>
                                <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} hoverable/>}>
                        
                    <p>price Cap: {millify(currency.priceCap) }</p>
                    <p>market Cap: {millify(currency.marketCap) }</p>
                    <p>Daily change: {millify(currency.change) }%</p>
                        </Card>
                        </Link>
    </Col>
))}
            </Row> */}
        </>
        )
};

export default Cryptocurrencies
