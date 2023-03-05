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
                        <Link to="/"><div className="label">Home</div></Link>
                        <Link to="/buy"><div className="label">Buy</div></Link>
                        <Link to="/create"><div className="label">Create</div></Link>
                        <Link to="/subscribe"><div className="label">Subscribe</div></Link>
                        <Link to="/showcase"><div className="label">Showcase</div></Link>
                        <Link to="/resources"><div className="label">Resources</div></Link>
                    </div>
                    <div className="rightMenu">
                        <Link to="/cart" className='cartBtn'><IconV1 iconName="cart1" /></Link>
                        <Link to="/login" className='loginBtn'><div className="label">Sign in</div></Link>
                        <Link to="/signup" className='getStartedBtn'><div className="label">Get Started</div></Link>
                    </div>        
                    <MenuDD1 />           
                </div>
                <div className="mobileMenu"><IconV1 iconName='menuIcon1' /></div>

            </div>
            }

            

        </motion.div>

     );
}
 
export default Header; 