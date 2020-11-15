import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
      </BrowserRouter>
    </div>
  );
}

export default App;
