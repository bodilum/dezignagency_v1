import React from 'react';
import { Route, Routes, BrowserRouter, Navigate, Link } from 'react-router-dom';

////////////////// IMPORT PAGES //////////////////////////////////////

import Home from '../Home';
import Buy from '../public/buy/Buy';
import Create from '../public/create/Create';
import Showcase from '../public/showcase/Showcase';
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

////////////////// IMPORT PAGES END //////////////////////////////////////


export default function AppRoutes() {
  return (
    <BrowserRouter>

        <Routes>

            <Route path="/" element={ <Home /> }></Route>
            <Route path="/home" element={ <Navigate to="/" /> }></Route>
           
            <Route path="/buy" element={ <Buy /> }></Route>
            <Route path="/create" element={ <Create /> }></Route>
            <Route path="/subscribe" element={ <Subscribe /> }></Route>
            <Route path="/showcase" element={ <Showcase /> }></Route>

            <Route path="/signup" element={ <Signup /> }></Route>
            <Route path="/login" element={ <Login /> }></Route>

        </Routes>
        
    </BrowserRouter>
  )
}
