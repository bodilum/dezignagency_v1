import React, { useState, useEffect } from "react";
import "./menu-dd1.scss";

import DOMPurify from "dompurify";

const MenuDD1 = ( { menuState, menuPointerPos } ) => {
    const [left, setLeft] = useState(menuPointerPos);
    const [menuIsVisible, setMenuVisible] = useState(false);
    const [isMouseOverMenuBody, setIsMouseOverMenuBody] = useState(null);

    const easeTiming = {
        fast: 0.4, normal: 0.8, slow: 1.2
    }

    const getInlineStyles = (leftVal) => {
        let style1 = `
            #mainMenuDD1 {
                -webkit-transition: all ${ easeTiming.fast }s cubic-bezier(0.16, 1, 0.3, 1);
                -moz-transition: all ${ easeTiming.fast }s cubic-bezier(0.16, 1, 0.3, 1);
                -ms-transition: all ${ easeTiming.fast }s cubic-bezier(0.16, 1, 0.3, 1);
                transition: all ${ easeTiming.fast }s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .menuContent:after, .menuContent:before {
                left: ${ leftVal }%;
                -webkit-transition: all ${ easeTiming.fast }s cubic-bezier(0.16, 1, 0.3, 1);
                -moz-transition: all ${ easeTiming.fast }s cubic-bezier(0.16, 1, 0.3, 1);
                -ms-transition: all ${ easeTiming.fast }s cubic-bezier(0.16, 1, 0.3, 1);
                transition: all ${ easeTiming.fast }s cubic-bezier(0.16, 1, 0.3, 1);
            }`;

        return style1;
    }

    /// function to move menu pointer
    const movePointer = (menuTargetPos) => {
        setLeft(prev => {
            return menuTargetPos;
        });
    }


    //// function to set menu visibility
    const menuVisibilityHandler = ( newMenuState ) => {
        setMenuVisible(newMenuState);
    }
        

    useEffect (() => {
        // if menu is not visible the set menu visible
        if(!menuIsVisible) menuVisibilityHandler(true);

        // console.log('Active Menu Pos: ', menuPointerPos);
        movePointer(menuPointerPos);
    }, [menuPointerPos]);
    
    useEffect (() => {
        menuVisibilityHandler(menuState);
    }, [menuState]);

    useEffect (() => {
        if( isMouseOverMenuBody == null ) return;

        let timeOut1 = null;

        if( !isMouseOverMenuBody ) {
            timeOut1 = setTimeout(() => {
                menuVisibilityHandler(false);
            }, 500);
        }

        return (() => {
            clearTimeout(timeOut1);
        });

    }, [isMouseOverMenuBody]);


    return ( 
        <>
            <style type="text/css" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize( getInlineStyles(left) ) }}></style>
            <div id="mainMenuDD1" className={ (menuIsVisible) ? 'isVisible' : '' } onMouseOver={ () => setIsMouseOverMenuBody(true) } onMouseLeave={ () => setIsMouseOverMenuBody(false) }>
                <div className="menuContent">Dynamic Menu Content here... { menuPointerPos }</div>
            </div> 
        </>
    );
}
 
export default MenuDD1; 