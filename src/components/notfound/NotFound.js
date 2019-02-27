/**
 * Created by AneeqShah on 2/26/19.
 */


import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';


const NotFound = () => {

    return (
        <div className="NotFound">
            <h1 className="NotFound-title">Oops! Not Found</h1>
            
            <Link to="/" className="NotFound-link">Go To HomePage</Link>
        </div>
    );
};

export default NotFound;