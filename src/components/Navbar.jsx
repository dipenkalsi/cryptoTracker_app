import React,{useState,useEffect} from 'react'
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import logo from './logo.png'
const Navbar = () => {
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
    <div className='nav-container'>
      <div className='logo-container flex justify-between'>
        {/* <Avatar/>
        <Typography.Title level={2} className='logo'>
            <Link to="/">Cryptobizz</Link>
        </Typography.Title> */}
        <Link to="/">
            <img src={logo} alt="" style={{width:"150px",filter:"invert(1)"}} />
        </Link>
        {screenSize<1024 && <ButtonUnstyled className="my-auto" onClick={()=>setActive(!active)}><i class="fa-solid fa-bars fa-xl text-gray-500"></i></ButtonUnstyled>}
      </div>
      {active &&(

        <Menu theme='light' style={{backgroundColor:"whitesmoke"}}>
            <Menu.Item >
            
                <Link to="/"><i class="fa-sharp fa-solid fa-house" style={{marginRight:"10px"}}></i>Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/cryptocurrencies"><i class="fa-brands fa-bitcoin" style={{marginRight:"10px"}}></i>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/news"><i class="fa-solid fa-newspaper" style={{marginRight:"10px"}}></i>News</Link>
            </Menu.Item>
            <Menu.Item >
                <Link to="/exchanges"><i class="fa-sharp fa-solid fa-coins" style={{marginRight:"10px"}}></i>Exchanges</Link>
            </Menu.Item>
        </Menu>
          )}
    </div>
  )
}

export default Navbar
