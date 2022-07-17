import React from 'react';
import {Link} from "react-router-dom";


import "./curd.css"
import "antd/dist/antd.css"


const Hedder = () => {

    return (
        <div>
            <div className='hedder'>
                <h1>CRUD</h1>
                <button className='head'><Link to="/create">Create</Link></button>
                <button className='home'><Link to="/">Home</Link></button>
                <button className='table'><Link to="/table">Table</Link></button>
            </div>
        </div>
    );
}

export default Hedder;
