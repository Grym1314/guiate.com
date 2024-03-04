import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './views/LandingPage';

const el = document.getElementById('id');
const root = ReactDOM.createRoot(el);
const App = () =>{
  return(
    <div>
      <LandingPage />
    </div>
  );
}

root.render(<App/>);
