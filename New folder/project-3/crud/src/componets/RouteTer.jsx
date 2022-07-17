import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Curd from './Curd';
import CurdData from './CurdData';
import Edit from './Edit';


const RouteTer = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Curd />}/>
                <Route path='/create' element={<Curd />}/>
                <Route path='/table' element={<CurdData/>}/>    
                <Route path='/edit' element={<Edit/>}/>
            </Routes>
        </>      
    );
}

export default RouteTer;
