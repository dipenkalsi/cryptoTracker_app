import React,{useState,useEffect} from 'react'
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import { Switch } from 'antd';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import logo from './logo.png'
import GoToTop from './GoToTop';
const Navbar = ({mode,handleModeChange}) => {
  const [active ,setActive]=useState(true)
  const [screenSize,setScreenSize]=useState(null)

  useEffect(()=>{
    const handleResize=()=>setScreenSize(window.innerWidth)
    window.addEventListener('resize',handleResize)
    handleResize()
    return()=>window.removeEventListener('resize',handleResize)
  },[]);
  useEffect(()=>{
    if(screenSize<1024){
      setActive(false);
    }
    else{
      setActive(true);
    }
  },[screenSize]);
  return (
    <div className={mode==="dark"?"bg-black nav-container":"nav-container"}>
      <div className={mode=="dark"?'logo-container flex justify-between bg-black':'logo-container flex justify-between'}>
        <Link to="/">
            <img src={logo} alt="" style={{width:"150px"}} className={mode=="dark"?'':'invert'}/>
        </Link>
        {screenSize<1024 && <ButtonUnstyled className="my-auto" onClick={()=>setActive(!active)}><i class="fa-solid fa-bars fa-xl text-gray-500"></i></ButtonUnstyled>}
      </div>
      {active &&(

        <Menu theme={mode=="light"?"light":"dark"} style={{backgroundColor:"whitesmoke"}} className={mode==="dark"?"bg-black w-full":"w-full"}>
            <Menu.Item>           
                <Link to="/"><i class="fa-sharp fa-solid fa-house" style={{marginRight:"10px"}} onClick={()=>setActive(!active)}></i>Home</Link>
                <GoToTop/>
            </Menu.Item>
            <Menu.Item>
                <Link to="/cryptocurrencies"><i class="fa-brands fa-bitcoin" style={{marginRight:"10px"}} onClick={()=>setActive(!active)}></i>Cryptocurrencies</Link>
                <GoToTop/>

            </Menu.Item>
            <Menu.Item>
                <Link to="/news"><i class="fa-solid fa-newspaper" style={{marginRight:"10px"}} onClick={()=>setActive(!active)}></i>News</Link>
                <GoToTop/>

            </Menu.Item>
            <Menu.Item >
                <Link to="/exchanges"><i class="fa-sharp fa-solid fa-coins" style={{marginRight:"10px"}} onClick={()=>setActive(!active)}></i>Exchanges</Link>
                <GoToTop/>

            </Menu.Item>
            <Menu.Item >
                <Link to="/pricing"><i class="fa-solid fa-tag" style={{marginRight:"10px"}} onClick={()=>setActive(!active)}></i>Plans and Pricing</Link>
                <GoToTop/>

            </Menu.Item>
            <Menu.Item >
                <Link to="/mission"><i class="fa-solid fa-hand-fist" style={{marginRight:"10px"}} onClick={()=>setActive(!active)}></i>Our Mission</Link>
            </Menu.Item>
            <div className='ml-3 mt-5 mb-3'>
            <Switch size="small" onClick={handleModeChange}/> Dark Mode
            </div>
        </Menu>
          )}
    </div>
  )
}

export default Navbar
