import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MainEnglish from './pages/MainEnglish';
import MainPortuguese from './pages/MainPortuguese';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MainEnglish } />
      <Route exact path="/pt" component={ MainPortuguese } />
    </BrowserRouter>
  );
}

export default App;
