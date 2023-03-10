import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Eventpage from './Events/Eventpage/Eventpage';


function Router() {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/eventpage/*' element={<Eventpage/>} />
        </Routes>
    )
}

export default Router