import React from 'react'
import millify from 'millify';
import { Typography} from 'antd';
import {Link} from 'react-router-dom';
import logo from './logo.png'
import GoToTop from './GoToTop';
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
      <img src={logo} alt="" className={mode=="dark"?"w-1/2 mx-auto":"invert w-1/2 mx-auto"}/>
      <section class={mode=="dark"?"dark body-font":"body-font"}>
  <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-300">Revolutionazing the 
        <br class="hidden lg:inline-block"/> crypto industry.
      </h1>
      <p class="mb-8 leading-relaxed dark:text-gray-400">We strive to become your pandora box to the world of cyptocurrencies. Keep track of the state of the market, get to learn about cryptocurrencies or get the latest crypto news, all on one platform - CRYPTOBIZZ.</p>
      <Link class="flex justify-center" to="/mission">
      <Button variant="contained">Our Mission</Button>
      </Link>
      <GoToTop/>
    </div>
    <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/random/500X500/?cypto"/>
    </div>
  </div>
</section>
    <Title level={1}  style={{marginBottom:"20px",marginTop:"40px",textAlign:"center"}} className={mode=="dark"?"text-gray-300":""} >
      Global Crypto Statistics
    </Title>


    <div class={mode=="dark"?" dark px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14":"px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14"}>
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div class="text-center mt-8 md:mt-0">
      <div class="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
      <i class="fa-solid fa-coins fa-3x "></i>
      </div>
      <h6 class="text-4xl font-bold text-indigo-700 dark:text-indigo-200">{globalStats.totalCoins}</h6>
      <p class="mb-2 font-bold text-md dark:text-indigo-200">Total Coins</p>
      
    </div>
    <div class="text-center">
    <div class="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-20 sm:h-20">        <i class="fa-brands fa-ethereum fa-3x"></i>
      </div>
      <h6 class="text-4xl font-bold text-blue-700 dark:text-indigo-200">{globalStats.total}</h6>
      <p class="mb-2 font-bold text-md dark:text-indigo-200">Total Cryptocurrencies</p>
     
    </div>
    <div class="text-center">
    <div class="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-20 sm:h-20">      <i class="fa-solid fa-money-bill-trend-up fa-3x"></i>
      </div>
      <h6 class="text-4xl font-bold text-blue-700 dark:text-indigo-200">{millify(globalStats.totalExchanges)}</h6>
      <p class="mb-2 font-bold text-md dark:text-indigo-200">Total Exchanges</p>
    </div>
    <div class="text-center">
    <div class="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-20 sm:h-20">      <i class="fa-solid fa-clock fa-3x"></i>
      </div>
      <h6 class="text-4xl font-bold text-blue-700 dark:text-indigo-200">{millify(globalStats.total24hVolume)} $</h6>
      <p class="mb-2 font-bold text-md dark:text-indigo-200">24h Volume</p>
    </div>
    <div class="text-center">
    <div class="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-20 sm:h-20">      <i class="fa-solid fa-yen-sign fa-3x "></i>
      </div>
      <h6 class="text-4xl font-bold text-blue-700 dark:text-indigo-200">{millify(globalStats.totalMarketCap)} $</h6>
      <p class="mb-2 font-bold text-md dark:text-indigo-200">Total Market Cap</p>
    </div>
    <div class="text-center">
    <div class="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-20 sm:h-20">      <i class="fa-solid fa-globe fa-3x"></i>
      </div>
      <h6 class="text-4xl font-bold text-blue-700 dark:text-indigo-200">{millify(globalStats.totalMarkets)}</h6>
      <p class="mb-2 font-bold text-md dark:text-indigo-200">Total Markets</p>
    </div>
  </div>
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

      <div class={mode=="dark"?"container px-5 py-24 mx-auto flex flex-wrap items-center dark":"container px-5 py-24 mx-auto flex flex-wrap items-center"}>
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-2xl text-gray-900 dark:text-gray-300">Sign Up for newsletter!</h1>
      <p class="leading-relaxed mt-4 dark:text-gray-400">Get notified through e-mails about the latest updates about the crypto market the earliest. Sign Up for free Now!</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 dark:bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5 dark:text-gray-300">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600 dark:text-gray-300">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded dark:bg-gray-800 dark:focus:bg-gray-900  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-300">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border dark:bg-gray-800 dark:focus:bg-gray-900  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3 text-center">You'll start recieving the updates within 24 hours of your signing up.</p>
    </div>
  </div>


  <section class={mode=="dark"?"text-gray-600 body-font dark":"text-gray-600 body-font"}>
  <div class="container px-5 py-5 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 dark:text-indigo-200">FOR COMPLETE ACCESS AND ADDITIONAL FEATURES</h2>
      <h1 class="md:text-4xl text-2xl font-medium title-font text-gray-900 dark:text-gray-300">Download the mobile app.</h1>
    </div>
    <div class="flex flex-col md:flex-row md:space-y-0 space-y-4 justify-center md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 md:space-x-4">
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-900" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 dark:text-gray-200" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-600 mb-1 dark:text-gray-300">GET IT ON</span>
          <span class="title-font font-medium dark:text-gray-400">Google Play</span>
        </span>
      </button>
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 dark:text-gray-200" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-600 mb-1 dark:text-gray-300">Download on the</span>
          <span class="title-font font-medium dark:text-gray-400">App Store</span>
        </span>
      </button>
    </div>
  </div>
</section>

      <section class={mode=="dark"?"text-gray-600 body-font relative dark":"text-gray-600 body-font relative"}>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">Our dedicated personnel will try to get in touch with you as soon as possible.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 dark:bg-gray-800 dark:focus:bg-gray-900  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 dark:bg-gray-800 dark:focus:bg-gray-900  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 dark:bg-gray-800 dark:focus:bg-gray-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 rounded text-lg">Submit</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500 dark:text-indigo-300">example@email.com</a>
          <p class="leading-normal my-5 dark:text-gray-400">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Homepage
