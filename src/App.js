import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { useAppDispatch } from './store/indexes';
import { reducerSlice } from './store/reducer';

const App = () => {
  const dispatch = useAppDispatch();
  const auth = localStorage.getItem('Auth');
  console.log('getting auth from localstorage');
  if (auth && auth === 'true') {
    dispatch(reducerSlice.actions.setAuth('true'));
  } else { 
    dispatch(reducerSlice.actions.setAuth('false'));
  }
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
