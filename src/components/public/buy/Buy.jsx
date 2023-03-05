import React, { useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { color } from '@chakra-ui/react';

const Buy = () => {
    return (
        <AnimatePresence>

            <motion.div 
                className="public-pg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                exit={{ opacity: 0}}>
                    <h3 className="text-8xl">
                    Dezign Agency Buy page... 
                    </h3>
            </motion.div>

        </AnimatePresence>
     );
}
 
export default Buy;