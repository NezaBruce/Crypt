//Define a stored proceudre tosdispale orders shipped betweetwo dates passed to the procedure as argument s

//ex >CALL shippedOrders('2021-10',2021-11-11);
//
//






import React, { useState } from 'react'
// import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router'
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleFilled, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltFilled } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../Services/cryptoApi';
// import Loader from './Loader'
// import LineChart from './LineChart'

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {

    const { coinId } = useParams();
    const { timeperiod, setTimeperiod } = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
    const cryptoDetails = data?.data?.coin;

    if (isFetching) {
        return "Loading...";
    };

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    const stats = [
        { title: "Price to USD ", value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
        { title: "Rank ", value: cryptoDetails.Rank, icon: <NumberOutlined /> },
        { title: "24 Volume ", value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltFilled /> },
        { title: "Market Cap ", value: `$ ${cryptoDetails.marketCapy && millify(cryptoDetails.marketCapy)}`, icon: <DollarCircleOutlined /> },
        { title: "All-time-high(daily avg.) ", value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
    ];
    const genericstats = [
        { title: "NUmber of Markets ", value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
        { title: "NUmber of Exchanges ", value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: "Approved Supply ", value: cryptoDetails.approvedSupply ?<CheckOutlined/>:<StopOutlined/>, icon: <ExclamationCircleFilled /> },
        { title: "Total Supply ", value: `$ ${cryptoDetails.totalSupply}`, icon: <ExclamationCircleFilled /> },
        { title: "Circulating Supply  ", value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <TrophyOutlined /> },

    ];
    return (
      <div className="coin-detail-container">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {data?.data?.coin.name}({data?.data?.coin.slug}) Price
          </Title>
          <p>
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View valueletmesleep
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            {cryptoDetails.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </Col>
        <Select
          defaultValue="7d"
          className="select-timeperiod"
          placeHolder="Select Timeperiod"
          onChange={(value) => setTimeperiod(value)}
        >
          {time.map((date) => (
            <Option key={date}>{date}</Option>
          ))}
        </Select>
        {/* <LineChart coinHistory={coinHistory} currrencyPrice={millify(CryptoDetails.price)} coinName={CryptoDetails.name}/> */}
        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title className="coin-details-heading">
                {cryptoDetails.name} Value statistics
              </Title>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </Col>
            {stats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
          <Col className="coin-stats-info">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                Other Stats Info
              </Title>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </Col>
            {genericstats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
        <Col className="coin-dexv-lin">
          <Row className="coin-desc">
            <Title level={3} className="coin-details-heading">
              What is {cryptoDetails.name}?
                    </Title>
                    {/* {HTMLReactParser(cryptoDetails.description)} */}
                </Row>
                <Col className="coin-links">
                    <Title level={3} className="coin-details-hedaing">
{cryptoDetails.name} Links
                    </Title>
                    {cryptoDetails.links?.map((link) => (
                        <Row className="coin-link" key={link.name}>
                            <Title className="link-name">{ link.type}</Title>
                        </Row>
                    ))}
                </Col>
        </Col>
      </div>
    );
}

export default CryptoDetails
