import React, { useEffect } from 'react';
import './footer.scss';

import { motion } from 'framer-motion';

const Footer = (props) => {
    return ( 
        <motion.div id="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0}}>

            <div className="footer">
                <h2>Footer here...</h2>
            </div>
        </motion.div>
     );
}
 
export default Footer;