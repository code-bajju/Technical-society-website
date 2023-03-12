import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FutureEvents from '../Subcomponents/CardGrid/futureEvents';
import PastEvents from '../Subcomponents/CardGrid/PastEvents';
import About from './About/About';
import Eventpage from './Events/Eventpage/Eventpage';



function Router() {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/eventpage/*' element={<Eventpage />} >
                <Route path='future' element={<FutureEvents />} />
                <Route path='past' element={<PastEvents />} />
            </Route>
        </Routes>
    )
}

export default Router