import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import {  CardActionArea, CircularProgress } from '@mui/material';
import {useGetCryptosQuery} from '../services/cryptoApi'
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  
    const rippleRef = React.useRef(null);
    const onRippleStart = (e) => {
      rippleRef.current.start(e);
    };
    const onRippleStop = (e) => {
      rippleRef.current.stop(e);
    };
  if(isFetching) return (<div style={{display:"flex" ,justifyContent:"center",alignItems:"center", height:"100vh"}}><CircularProgress style={{margin:"0 auto"}}/></div>)

  return (
    <>
    {!simplified && (
        <div style={{margin:"30px 30px"}}>
          <TextField fullWidth 
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          label="Search cryptos" id="fullWidth" size="small"/>
            
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
  <div class="max-w-4xl rounded-sm border border-gray-200 bg-white shadow-lg">
    <div class="text-right p-4 bg-pink-500">
      <span class="text-md font-semibold text-gray-100 tracking-normal uppercase">#{currency.rank}</span>
    </div>

    <div class="flex items-center relative mb-10">
      <div class="border-t border-gray-200 z-20 w-full"></div>

      <div class="rounded-full bg-white z-30 p-2 inline-block absolute mx-8">
        <img src={currency.iconUrl} alt="" className="w-10 h-auto"/>
      </div>
    </div>
    <div class="px-8 pb-4">
      {/* <h4 class="text-blue-500 text-sm font-dark">{currency.rank}</h4> */}
      <h2 class="text-blue-800 text-xl font-bold"> {currency.name}</h2>
      <p class="text-gray-600 text-sm">
      Price : {millify(currency.price)} $
      </p>
                <p class="text-gray-600 text-sm">Market Cap : {millify(currency.marketCap)} $</p>
                <p class="text-gray-600 text-sm">Daily Change : {millify(currency.change)}%</p>
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
    </>
  )
}

export default Cryptocurrencies
