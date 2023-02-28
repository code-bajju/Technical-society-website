import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
