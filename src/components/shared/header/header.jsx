import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

// third party libs
import { motion } from 'framer-motion';

// sub components
import IconV1 from '../../utilities/iconv1/IconV1';
import MenuDD1 from '../menuDD1/menu-dd1';

/// contexts & custom hooks
import { useHeaderMenu, useHeaderMenuUpdate } from '../../../contexts/header-menu/header-menu-context';


const Header = () => {
    const allMenuPos = {
        home: 5, buy: 15, create: 25, subscribe: 35, showcase: 45, resources: 55, 
        cart: 64.5, signin: 75, signup: 92
    };
    const [activeMenuPos, setActiveMenuPos] = useState( 5 );
    const [menuDDState, setmenuDDState] = useState( false );

    const [userVars, setUserVars] = useState({ loggedIn: false });
    const [mobileMenuState, setMobileMenuState] = useState(false);

    const [winWidth, setWinWidth] = useState(window.innerWidth);
    const [winHeight, setWinHeight] = useState(window.innerHeight);

    const [logoIconName, setLogoIconName] = useState('logo');

    const mobileBreakpoint = 480;

    // use custom hooks
    let headerMenu1 = useHeaderMenu();

    // function to run when window resizes
    const handleWinResize = () => {
        setWinWidth(window.innerWidth);
        setWinHeight(window.innerHeight);
        
    }

    // function to setActiveMenuPo 

    // render this only once: the first time component mounts
    useEffect(() => {
        window.addEventListener('resize', handleWinResize);

        // cleanup / unmount code
        return () => {
            window.removeEventListener('resize', handleWinResize);
        }
    }, []);

    // side effect when winwidth changes
    useEffect(() => {
        // set logo icon name
        setLogoIconName(() => {
            let newIconName = (winWidth <= mobileBreakpoint) ? "logoIcon" : "logo";
            return newIconName;
        } );
    }, [winWidth]);



    return (
        
        <motion.div 
        id="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0}}>
            {
                userVars.loggedIn 
                ? 
            <div className="mainHeader">
                <div className="mainLogo"><Link to="/"></Link></div>
                <div className="mainMenu">
                    <div className="leftMenu"></div>
                    <div className="rightMenu">
                        <Link to="/">Bode Chris</Link>
                    </div>
                </div>
                
                <div className="mobileMenu"><IconV1 iconName='menuIcon1' /></div>
            </div>
            : 
            <div className="mainHeader">
                <div className="mainLogo">
                    <Link to="/">
                        <IconV1 iconName={ logoIconName } />
                    </Link>
                </div>
                <div className="mainMenu">
                    <div className="leftMenu">
                        <Link to="/" ><div className="label" onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.home ) } } onMouseOut={ () => { setmenuDDState(false); } } >Home</div></Link>
                        <Link to="/buy"><div className="label" onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.buy ) } } onMouseOut={ () => { setmenuDDState(false); } } >Buy</div></Link>
                        <Link to="/create"><div className="label" onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.create ) } } onMouseOut={ () => { setmenuDDState(false); } } >Create</div></Link>
                        <Link to="/subscribe"><div className="label" onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.subscribe ) } } onMouseOut={ () => { setmenuDDState(false); } } >Subscribe</div></Link>
                        <Link to="/showcase"><div className="label" onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.showcase ) } } onMouseOut={ () => { setmenuDDState(false); } } >Showcase</div></Link>
                        <Link to="/resources"><div className="label" onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.resources ) } } onMouseOut={ () => { setmenuDDState(false); } } >Resources</div></Link>
                    </div>
                    <div className="rightMenu">
                        <Link to="/cart" className='cartBtn' onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.cart ) } } onMouseOut={ () => { setmenuDDState(false); } } ><IconV1 iconName="cart1" /></Link>
                        <Link to="/login" className='loginBtn' onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.signin ) } } onMouseOut={ () => { setmenuDDState(false); } } ><div className="label">Sign in</div></Link>
                        <Link to="/signup" className='getStartedBtn' onMouseOver={ () => { setmenuDDState(true); setActiveMenuPos( allMenuPos.signup ) } } onMouseOut={ () => { setmenuDDState(false); } } ><div className="label">Get Started</div></Link>
                    </div>        
                    <MenuDD1 menuState={ menuDDState } menuPointerPos={ activeMenuPos } />           
                </div>
                <div className="mobileMenu"><IconV1 iconName='menuIcon1' /></div>

            </div>
            }

            

        </motion.div>

     );
}
 
export default Header; 