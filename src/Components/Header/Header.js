import React from 'react';
import image from './himg.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="bg-dark justify-content-center d-flex" style={{padding: '10px'}}>
            <Link to="/home" className="justify-content-center d-flex text-light" style={{textDecoration: 'none'}}>
                <img src={image} style={{height: '80px',borderRadius: '50%',marginRight: '10px'}} alt=""/>
                <h1>World Popular Posts</h1>
            </Link>
        </div>
    );
};

export default Header;