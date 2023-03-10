import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FutureEvents from './futureEvents';
import PastEvents from './PastEvents';


function CardRenderer() {
    return (
        <Routes>
            <Route path='/future' element={<FutureEvents/>} />
            <Route path='/past' element={<PastEvents/>} />
        </Routes>
    )
}

export default CardRenderer