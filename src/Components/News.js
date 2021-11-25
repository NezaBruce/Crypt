import React,{useState} from 'react'
import { Select, Row, Typography, Col, Avatar, Card } from 'antd'
import moment from "moment";
import { useGetCryptosQuery } from '../Services/cryptoApi';
import { useGetCryptoNewsQuery } from '../Services/cryptoNewsApi';
const { Title,Text } = Typography;
const { Option } = Select;
const News = ({simplified}) => {
const demoImage =
        "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
    const [category, setCategory] = useState("Cryptocurrency");
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        category,
        count: simplified ? 10 : 100
    });
    if(!cryptoNews?.value) return <Loader/>
    return (
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a crypto"
              optionFilterProp="children"
              onChange={(e) => setCategory(e.target.value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins?.map((currency) => (
                            <Option value={currency.name}>{currency.name}</Option>
                        ))}
            </Select>
          </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer"></a>    
                    </Card>
                </Col>
            ))}
      </Row>
    );
}

export default News
