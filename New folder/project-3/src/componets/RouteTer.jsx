import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Curd from './Curd';
import Hedder from './Hedder';
import CurdData from './CurdData';
import Display from './Display';
import Edit from './Edit';


const RouteTer = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Hedder/>}/>
                <Route path='/create' element={<Curd />}/>
                <Route path='/table' element={<CurdData/>}/>
                <Route path='/display' element={<Display/>}/>
                <Route path='/edit' element={<Edit/>}/>
            </Routes>
        </>      
    );
}

export default RouteTer;
