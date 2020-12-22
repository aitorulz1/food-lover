import React from 'react';
import logo from '../../images/food-lover.jpg';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
             <img src={logo} />
        </div>
    )
}
