import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD

          <Navigation></Navigation>
=======
        <ErrorBoundary>
          <Navigation></Navigation>
          </ErrorBoundary>
>>>>>>> 04ca84b4196ff46d9887a9b6e24ffd254c99d0ad
      </BrowserRouter>
    </div>
  );
}

export default App;
