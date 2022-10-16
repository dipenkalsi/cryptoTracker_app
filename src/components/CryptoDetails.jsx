import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import './CryptoDetailsStyles.css'
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import { CircularProgress } from '@mui/material';
import LineChart from './Graph';


const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = ({mode}) => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState('24h');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return (<div style={{display:"flex" ,justifyContent:"center",alignItems:"center", height:"100vh"}}><CircularProgress style={{margin:"0 auto"}}/></div>);

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  return (
    <Col className={mode=="dark"?"coin-detail-container dark bg-[#0d0d0d]":"coin-detail-container"}>
      <Col className="coin-heading-container">
        <Title level={1} className="coin-name dark:text-gray-300"style={{fontWeight:"400",color:"black"}}>
          {data?.data?.coin.name} ({data?.data?.coin.symbol})
        </Title>
      </Col>
      <Select defaultValue="24h" dropdownClassName='dropdown-style-dark' className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
        {time.map((date) => <Option key={date}>{date}</Option>)}
      </Select>
      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} mode={mode}/>
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading dark:text-gray-300" style={{fontWeight:"400",color:"black"}} >{cryptoDetails.name} Value Statistics</Title>
            <p className='dark:text-gray-400'>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text className='dark:text-gray-400'>{icon}</Text>
                <Text className='dark:text-gray-400'>{title}</Text>
              </Col>
              <Text className="stats dark:text-gray-400">{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} style={{fontWeight:"400",color:"black"}} className="coin-details-heading dark:text-gray-300">State of the market</Title>
            <p className="dark:text-gray-400">An overview of the market. Note that this data is not related to {cryptoDetails.name} and is absolute with respect to the market.</p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text className="dark:text-gray-400">{icon}</Text>
                <Text className="dark:text-gray-400">{title}</Text>
              </Col>
              <Text className="stats dark:text-gray-400">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className="coin-desc-link dark:text-gray-400">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading dark:text-gray-300" style={{fontWeight:"400"}}>What is {cryptoDetails.name}?</Title>
          <div className='dark:text-gray-300'>
          {HTMLReactParser(cryptoDetails.description)}
          </div>
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading dark:text-gray-300" style={{fontWeight:"400",color:"black"}}>{cryptoDetails.name} Links</Title>
          {cryptoDetails.links?.map((link) => (
            <Row className="coin-link text-green-600" key={link.name}>
              <Title level={5} className="link-name dark:text-gray-400" style={{fontWeight:"500",color:"black"}}>{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer" style={{fontWeight:"400",color:"green"}}>{link.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;