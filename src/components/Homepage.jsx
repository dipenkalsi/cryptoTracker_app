import React from 'react'
import millify from 'millify';
import { Typography} from 'antd';
import {Link} from 'react-router-dom';
import {Cryptocurrencies,News} from './index'
import { Button ,CircularProgress,Typography as Typo} from '@mui/material';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title }  = Typography;
const Homepage = () => {
  const {data,isFetching}=useGetCryptosQuery(10);
  const globalStats=data?.data?.stats
  if(isFetching) return (<div style={{display:"flex" ,justifyContent:"center",alignItems:"center", height:"100vh"}}><CircularProgress style={{margin:"0 auto"}}/></div>)
  return (
    <>
    <Title level={1} className="heading" style={{marginBottom:"35px",textAlign:"center"}}>
      Global Crypto Stats
    </Title>
    {/* <Row>
      <Col span={24} style={{margin:"15px 0",textAlign:"center"}}><i class="fa-solid fa-coins fa-2xl"></i><Statistic title="Total Coins" value={globalStats.totalCoins} style={{marginTop:"12px"}}/></Col>
      <Col span={12} style={{margin:"25px 0",textAlign:"center"}}><i class="fa-brands fa-ethereum fa-2xl"></i><Statistic title="Total Cryptocurrencies" value={globalStats.total} style={{marginTop:"12px"}}/></Col>
      <Col span={12} style={{margin:"25px 0",textAlign:"center"}}><i class="fa-solid fa-money-bill-trend-up fa-2xl"></i><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} style={{marginTop:"12px"}}/></Col>
      <Col span={12} style={{margin:"25px 0",textAlign:"center"}}><i class="fa-solid fa-yen-sign fa-2xl"></i><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} style={{marginTop:"12px"}}/>USD</Col>
      <Col span={12} style={{margin:"25px 0",textAlign:"center"}}><i class="fa-solid fa-hourglass-start fa-2xl"></i><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} style={{marginTop:"12px"}}/>USD</Col>
      <Col span={24} style={{margin:"15px 0",textAlign:"center"}}><i class="fa-solid fa-globe fa-2xl"></i><Statistic title="Total Market" value={millify(globalStats.totalMarkets)} style={{marginTop:"12px"}}/></Col>
      </Row> */}

<div class="container my-24 px-6 mx-auto">
  <section class="mb-32 text-gray-800 text-center">
    <div class="grid lg:gap-x-12 md:grid-cols-3">
      <div class="mb-12 md:mb-0">
        <div class="p-4 bg-blue-600 rounded-md shadow-lg inline-block mb-6">
        <i class="fa-solid fa-coins fa-3x text-white"></i>
        </div>
        <h3 class="text-2xl font-bold text-blue-600 mb-4">{globalStats.totalCoins}</h3>
        <h5 class="text-lg font-medium text-gray-500">Total Coins</h5>
      </div>

      <div class="mb-12 md:mb-0">
        <div class="p-4 bg-blue-600 rounded-md shadow-lg inline-block mb-6 w-[74px]">
        <i class="fa-brands fa-ethereum fa-3x text-white"></i>
        </div>
        <h3 class="text-2xl font-bold text-blue-600 mb-4">{globalStats.total}</h3>
        <h5 class="text-lg font-medium text-gray-500">Total Cryptocurrencies</h5>
      </div>

      <div class="mb-12 md:mb-0">
        <div class="p-4 bg-blue-600 rounded-md shadow-lg inline-block mb-6">
        <i class="fa-solid fa-money-bill-trend-up fa-3x text-white"></i>
        </div>
        <h3 class="text-2xl font-bold text-blue-600 mb-4">{millify(globalStats.totalExchanges)}</h3>
        <h5 class="text-lg font-medium text-gray-500">Total Exchanges</h5>
      </div>
      <div class="mb-12 md:mb-0 lg:mt-12">
        <div class="p-4 bg-blue-600 rounded-md shadow-lg inline-block mb-6">
        <i class="fa-solid fa-clock fa-3x text-white"></i>
        </div>
        <h3 class="text-2xl font-bold text-blue-600 mb-4">{millify(globalStats.total24hVolume)} $</h3>
        <h5 class="text-lg font-medium text-gray-500">Total 24h Volume</h5>
      </div>
      <div class="mb-12 md:mb-0 lg:mt-12">
        <div class="p-4 bg-blue-600 rounded-md shadow-lg inline-block mb-6 w-[74px]">
        <i class="fa-solid fa-yen-sign fa-3x text-white"></i>
        </div>
        <h3 class="text-2xl font-bold text-blue-600 mb-4">{millify(globalStats.totalMarketCap)} $</h3>
        <h5 class="text-lg font-medium text-gray-500">Total Market Cap</h5>
      </div>
      <div class="mb-12 md:mb-0 lg:mt-12">
        <div class="p-4 bg-blue-600 rounded-md shadow-lg inline-block mb-6">
        <i class="fa-solid fa-globe fa-3x text-white"></i>
        </div>
        <h3 class="text-2xl font-bold text-blue-600 mb-4">{millify(globalStats.totalMarkets)}</h3>
        <h5 class="text-lg font-medium text-gray-500">Total Market</h5>
      </div>
    </div>
  </section>
  
</div>

      <div className="home-heading-container" style={{marginBottom:"20px"}}>
        <Title level={1} className="home-title" style={{margin:"0"}}>Kings of the market</Title>
        <Button className="show-more" variant="outlined" size="small" style={{margin:"25.2 0"}}><Link to="/cryptocurrencies"><Typo variant="body2">Show All</Typo></Link></Button>
      </div>
      <Cryptocurrencies simplified={true}/>
      <div className="home-heading-container" style={{marginBottom:"20px"}}>
      <Title level={1} className="home-title" style={{margin:"0"}}>What's out there</Title>
        <Button className="show-more" variant="outlined" size="small" style={{margin:"25.2 0"}}><Link to="/news"><Typo variant="body2">Show All</Typo></Link></Button>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage
