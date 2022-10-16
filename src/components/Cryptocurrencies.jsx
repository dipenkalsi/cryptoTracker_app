import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import {  CardActionArea, CircularProgress } from '@mui/material';
import {useGetCryptosQuery} from '../services/cryptoApi'
const Cryptocurrencies = (props) => {
  const count = props.simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList,searchTerm]);

  
    const rippleRef = React.useRef(null);
    const onRippleStart = (e) => {
      rippleRef.current.start(e);
    };
    const onRippleStop = (e) => {
      rippleRef.current.stop(e);
    };
  if(isFetching) return (<div style={{display:"flex" ,justifyContent:"center",alignItems:"center", height:"100vh"}}><CircularProgress style={{margin:"0 auto"}}/></div>)

  return (
    <div className={props.mode=="dark"?"bg-[#0d0d0d] py-5 px-5 dark":"py-5 px-5"}>
    {!props.simplified && (
        <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
          
        <input onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Search" required/>
    </div>
      )}
    <Grid container rowSpacing={2} columnSpacing={2} style={{margin:"5px -8px", minHeight: "100vh",
      backgroundImage: `url(${Image})`,
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "norepeat",
      backgroundSize: "cover"}}>
      {cryptos?.map((currency)=>(
        <Grid item xs={12} md={6} lg={4} xl={4} style={{padding:" 8px 15px", margin:"auto"}}>
          <Link to={`/crypto/${currency.uuid}`}>
        
<Card>
<CardActionArea>
<div class="my-0">
  <div class="max-w-4xl rounded-sm border  dark:border-none  bg-white shadow-lg dark:bg-gray-800">
    <div class="text-right p-4 bg-pink-500 dark:bg-pink-900">
      <span class="text-md font-semibold text-gray-100 tracking-normal uppercase">#{currency.rank}</span>
    </div>

    <div class="flex items-center relative mb-10">
      <div class="border-t border-pink-300 z-20 w-full"></div>

      <div class="rounded-full bg-white z-30 p-2 inline-block absolute mx-8">
        <img src={currency.iconUrl} alt="" className="w-10 h-auto"/>
      </div>
    </div>
    <div class="px-8 pb-4">
      {/* <h4 class="text-blue-500 text-sm font-dark">{currency.rank}</h4> */}
      <h2 class="text-blue-800 text-xl font-bold dark:text-blue-300"> {currency.name}</h2>
      <p class="text-gray-600 text-sm dark:text-blue-100">
      Price : {millify(currency.price)} $
      </p>
                <p class="text-gray-600 text-sm dark:text-blue-100">Market Cap : {millify(currency.marketCap)} $</p>
                <p class="text-gray-600 text-sm dark:text-blue-100">Daily Change : {millify(currency.change)}%</p>
    </div>
  </div>
  <TouchRipple ref={rippleRef} center={false} />
</div>
</CardActionArea>
</Card>
        </Link>
        </Grid>
      ))} 
    </Grid>
    </div>
  )
}

export default Cryptocurrencies
