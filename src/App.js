import React from 'react';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import logo from '../src/components/logo.png'
import {Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News} from './components';

function App() {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className='main' style={{marginLeft:"0",backgroundColor:"white"}}>
        <Layout style={{backgroundColor:"white"}}>
          <div className='routes'>
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route exact path="/exchanges">
                <Exchanges/>
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies/>
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails/>
              </Route>
              <Route exact path="/news">
                <News/>
              </Route>
            </Switch>
          </div>
        </Layout>
      <div className='footer'>
        <Typography.Title  level={5} style={{textAlign:"center",color:"black"}}>

          <img src={logo} alt="" style={{filter:"invert(1)",width:"120px", marginBottom:"20px"}}/>
          <p>Cryptobizz Inc.</p>
          All rights reserved
        </Typography.Title>
        <Space size={48}>
          <Link to="/" className='text-green-600'>Home</Link>
          <Link to="/exchanges" className='text-green-600'>Exchanges</Link>
          <Link to="/news" className='text-green-600'>News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
