import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Navigation></Navigation>
          </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
