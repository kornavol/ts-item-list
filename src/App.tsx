import React, {FC} from 'react';

import './App.css';
import logo from './logo.svg'

import MarketPlace from './pages/MarketPlace'


const App: FC = () => {
  return (
    <div className='App-root'>
     <img src={logo} className="logo" alt="logo" />
     <MarketPlace/>
    </div>
  );
}

export default App;
