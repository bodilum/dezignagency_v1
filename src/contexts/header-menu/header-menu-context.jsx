import React, { useContext, useState } from 'react';


// create context and update context
const HeaderMenuContext = React.createContext();
const HeaderMenuUpdateContext = React.createContext();

// create custom hooks to consume context and update context
export function useHeaderMenu() {
    return useContext(HeaderMenuContext);
}
export function useHeaderMenuUpdate() {
    return useContext(HeaderMenuUpdateContext);
}

export const HeaderMenuProvider = ({ children }) => {


    ///////// create states
    const [menuStates, setMenuStates] = useState({ isOpen: false, curArrowPosX: 'home' });
    const arrowPosX = { home: 5, buy: 10, create: 15, subscribe: 20, showcase: 25, resources: 30, cart: 35, signin: 40, signup: 45 };

    ////////// create functions
    // function to slide top arrow to curPosX
    const slideTopArrow = () => {};

    const menuStateFuncs = {
        slideTopArrow
    }



    return ( 
        <HeaderMenuContext.Provider value={ menuStates }>
            <HeaderMenuUpdateContext.Provider value={ menuStateFuncs }>
                { children }
            </HeaderMenuUpdateContext.Provider>
        </HeaderMenuContext.Provider>
     );
}