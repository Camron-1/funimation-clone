// NavigationBar.tsx

import React from 'react';
import './../App.css';


interface NavigationBarProps {
    svgImage: string; // SVG image source
}

const NavigationBar: React.FC<NavigationBarProps> = ({ svgImage }) => {
    return (
        <nav className="navigation-bar">
            <div className="logo-container">
                <img src={svgImage} alt="Logo" className="logo" />
            </div>
            <ul className="menu-options">
                <li className="menu-item">Stream</li>
                <li className="menu-item">Discover</li>
                <li className="menu-item">Shop</li>
            </ul>
        </nav>
    );
};

export default NavigationBar;