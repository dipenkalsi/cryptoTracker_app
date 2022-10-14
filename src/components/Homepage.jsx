import React from 'react'
import millify from 'millify';
import { Typography} from 'antd';
import {Link} from 'react-router-dom';
import {Cryptocurrencies,News} from './index'
import { Button ,CircularProgress,Typography as Typo} from '@mui/material';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title }  = Typography;
const Homepage = ({mode}) => {
  const {data,isFetching}=useGetCryptosQuery(10);
  const globalStats=data?.data?.stats
  if(isFetching) return (<div style={{display:"flex" ,justifyContent:"center",alignItems:"center", height:"100vh"}}><CircularProgress style={{margin:"0 auto"}}/></div>)
  return (
    <div className={mode=="dark"?"bg-[#0d0d0d] py-10 px-5":"py-10 px-5"}>
    <Title level={1}  style={{marginBottom:"35px",textAlign:"center"}} className={mode=="dark"?"text-gray-300":""} >
      Global Crypto Statistics
    </Title>

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
        <Title level={1} style={{margin:"0"}} className={mode=="dark"?"text-gray-300 home-title":"home-title"}>Kings of the market</Title>
        <Button className="show-more" variant="outlined" size="small" style={{margin:"25.2 0"}}><Link to="/cryptocurrencies"><Typo variant="body2">Show All</Typo></Link></Button>
      </div>
      <Cryptocurrencies simplified={true} mode={mode}/>
      <div className="home-heading-container" style={{marginBottom:"20px"}}>
      <Title level={1} className={mode=="dark"?"text-gray-300 home-title":"home-title"} style={{margin:"0"}}>What's out there</Title>
        <Button className="show-more" variant="outlined" size="small" style={{margin:"25.2 0"}}><Link to="/news"><Typo variant="body2">Show All</Typo></Link></Button>
      </div>
      <News simplified mode={mode}/>
    </div>
  )
}

export default Homepage
