import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

////////////////// IMPORT PAGES //////////////////////////////////////

import Header from './header/header';
// import Footer from './footer/footer';

import Home from '../Home';
import Buy from '../public/buy/Buy';
import Create from '../public/create/Create';
import Showcase from '../public/showcase/Showcase';
import Resources from '../public/resources/Resources';
import Subscribe from '../public/subscribe/Subscribe';
import About from '../public/About';
import Blog from '../public/Blog';
import Careers from '../public/Careers';
import Free from '../public/Free';
import HelpCenter from '../public/HelpCenter';
import Lab from '../public/Lab';
import Privacy from '../public/Privacy';
import Support from '../public/Support';
import TnCs from '../public/TnCs';
import WhyUs from '../public/WhyUs';


import Signup from './signup/Signup';
import Login from './login/Login';
import RecoverAccount from './recover-account/RecoverAccount';
import BgDesign from './bg-design/bgDesign';
import { HeaderMenuProvider } from '../../contexts/header-menu/header-menu-context';



////////////////// IMPORT PAGES END //////////////////////////////////////


export default function AppRoutes() {

  const location = useLocation();

  const [dynComp, setDynComp] = useState({ Footer: null })

  async function dynLoadComp() {
    const { Footer } = await import('./footer/footer');
    setDynComp( prev => ({ ...prev, Footer }) );
    console.log('Loading async component dynamically...', Footer);
  }

  // dynamically load component test
  useEffect( () => {
    dynLoadComp();
  }, []);

  return (
    
    <>
    <HeaderMenuProvider>
      <Header />
    </HeaderMenuProvider>
        <div id="mainApp">
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={ <Home /> }></Route>
          <Route path="/home" element={ <Navigate to="/" /> }></Route>
          
          <Route path="/buy" element={ <Buy /> }></Route>
          <Route path="/create" element={ <Create /> }></Route>
          <Route path="/subscribe" element={ <Subscribe /> }></Route>
          <Route path="/showcase" element={ <Showcase /> }></Route>

          <Route path="/signup" element={ <Signup /> }></Route>
          <Route path="/login" element={ <Login /> }></Route>
          <Route path="/resources" element={ <Resources /> }></Route>

        </Routes>
        </div>
    {/* <Footer /> */}
    { dynComp.Footer || "Footer loading..." }
    <BgDesign />
    </>     
    
  )
}
