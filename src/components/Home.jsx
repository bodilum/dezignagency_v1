import React from 'react';
import Welcome from './Welcome';
import UserHome from './user/UserHome';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 2 } }}
    exit={{ opacity: 0}}>

      <Welcome></Welcome>
      
    </motion.div>
  )
}
