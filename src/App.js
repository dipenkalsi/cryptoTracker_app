import React from 'react';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {useState} from 'react'
import logo from '../src/components/logo.png'
import {Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News} from './components';
import Pricing from './components/Pricing';
import Mission from './components/Mission';

function App() {
  const [mode,setMode]=useState("light");
  const handleModeChange=()=>{
    if(mode==="light"){
      setMode("dark")
      console.log(mode)
    }
    else{
      setMode("light")
      console.log(mode)
    }
  }
  return (
    <div className='app'>
      <div className={mode==="dark"?"bg-black navbar":"navbar"}>
        <Navbar mode={mode} handleModeChange={handleModeChange}/>
      </div>
      <div className='pt-16 sm:pt-0 main' style={{marginLeft:"0",backgroundColor:"white"}}>
        <Layout style={{backgroundColor:"white"}}>
          <div className=''>
            <Switch>
              <Route exact path="/">
                <Homepage mode={mode} className=""/>
              </Route>
              <Route exact path="/exchanges">
                <Exchanges mode={mode}/>
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies mode={mode}/>
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails mode={mode}/>
              </Route>
              <Route exact path="/news">
                <News mode={mode}/>
              </Route>
              <Route exact path="/pricing">
                <Pricing mode={mode}/>
              </Route>
              <Route exact path="/mission">
                <Mission mode={mode}/>
              </Route>
            </Switch>
          </div>
        </Layout>
      <div className={mode=="dark"?'footer bg-black':'footer'}>
        <Typography.Title  level={5} style={{textAlign:"center",color:"black"}}>

          <img src={logo} alt="" style={{width:"120px", marginBottom:"20px"}} className={mode=="dark"?'':'invert'}/>
          <p className={mode=="dark"?'text-gray-300':''}>Cryptobizz Inc.</p>
          <p className={mode=="dark"?'text-gray-300':''}>All rights reserved</p>
        </Typography.Title>
        <Space size={48}>
          <Link to="/" className='text-green-600'>Home</Link>
          <Link to="/exchanges" className='text-green-600'>Exchanges</Link>
          <Link to="/news" className='text-green-600'>News</Link>
          <Link to="/pricing" className='text-green-600 text-center'>Pricing</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
