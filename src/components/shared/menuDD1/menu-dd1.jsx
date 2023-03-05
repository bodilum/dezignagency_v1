import React, { useState } from "react";
import "./menu-dd1.scss";

import DOMPurify from "dompurify";

const MenuDD1 = () => {
    const [left, setLeft] = useState(45);

    const getInlineStyles = (leftVal) => {
        let style1 = `
            .menuContent:after, .menuContent:before {
                left: ${ leftVal }%;
            }`;

        return style1;
    }
        

    return ( 
        <>
            <style type="text/css" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize( getInlineStyles(left) ) }}></style>
            <div id="mainMenuDD1">
                <div className="menuContent">Dynamic Menu Content here...</div>
            </div> 
        </>
    );
}
 
export default MenuDD1;