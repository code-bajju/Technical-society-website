import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import EventDetails from './Pages/Events/eventDetails';
import Router from './Pages/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
         <Router/>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
