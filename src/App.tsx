import React, { FC } from "react";
import { motion } from "framer-motion";

import "./App.css";
import logo from "./logo.svg";
import MarketPlace from "./pages/MarketPlace";

const App: FC = () => {
  return (
    <div className="App-root">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{width:'100%'}}
      >
        <img src={logo} className="logo" alt="logo" />
        <MarketPlace />
      </motion.div>
    </div>
  );
};

export default App;
