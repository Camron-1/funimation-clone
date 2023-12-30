// NavigationBar.tsx

import React from 'react';
import './../App.css';


interface NavigationBarProps {
    homeSvgImage: string; // SVG image source
    searchSvgImage: string; // SVG image source
}

const NavigationBar: React.FC<NavigationBarProps> = ({ homeSvgImage, searchSvgImage }) => {
    return (
        <nav className="navigation-bar">
            <div className="logo-container">
                <img src={homeSvgImage} alt="Home Logo" className="logo" />
            </div>
            <ul className="menu-options">
                <li className="menu-item-stream menu-item">Stream
                    <ul className="submenu">
                        <li className="submenu-item">All Titles</li>
                        <li className="submenu-item">Current Season</li>
                        <li className="submenu-item">Schedule</li>
                        <li className="submenu-item">Discover</li>
                    </ul>
                </li>
                <li className="menu-item-discover menu-item">Discover
                    <ul className="submenu">
                        <li className="submenu-item">Games</li>
                        <li className="submenu-item">News</li>
                        <li className="submenu-item">Theatrical</li>
                    </ul>
                </li>
                <li className="menu-item-shop menu-item">Shop
                    <ul className="submenu">
                        <li className="submenu-item">Home Video</li>
                        <li className="submenu-item">Pre-Orders</li>
                        <li className="submenu-item">Figures & Collectibles</li>
                        <li className="submenu-item">Accessories</li>
                        <li className="submenu-item">Apparel</li>
                        <li className="submenu-item">Home Goods</li>
                        <li className="submenu-item">Gift Cards</li>
                    </ul>
                </li>
                <li className="menu-item-login menu-item">Login</li>
                <li className="menu-item-with-icon menu-item">
                    <img src={searchSvgImage} alt="Search" className="logo" />

                </li>
            </ul>
            <div className="navbar-fixed-top">
                <div className="nav-bar-block">
                    <ul className="nav-bar-menu">

                        <li><a href="https://www.funimation.com/shows/">Stream</a>

                            <ul>
                                <div className='submenu'>
                                    <div className="wrap">
                                        <li><a href="https://www.funimation.com/shows/">ALL TITLES</a></li>
                                    </div>
                                    <div className="wrap">
                                        <li><a href="https://www.funimation.com/simuldubs/">CURRENT SEASON</a></li>
                                    </div>
                                    <li><a href="https://www.funimation.com/schedule/">SCHEDULE</a></li>
                                </div>

                            </ul>
                        </li>
                        <li><a href="https://www.funimation.com/discover/">Discover</a>
                            <ul>
                                <div className='submenu'>
                                    <li><a href="https://www.funimation.com/games/">GAMES</a></li>
                                    <li><a href="https://www.crunchyroll.com/news">NEWS</a></li>
                                    <li><a href="https://www.crunchyroll.com">THEATRICAL</a></li>
                                </div>
                            </ul>
                        </li>
                        <li><a href="https://store.crunchyroll.com">Shop</a>
                            <ul>
                                <div className='submenu'>
                                    <div className="wrap">
                                        <li><a href="https://store.crunchyroll.com">HOME VIDEO</a></li>
                                    </div>
                                    <li><a href="https://store.crunchyroll.com/collections/all#/filter:ss_availability:Pre-Orders">PRE-ORDERS</a></li>
                                    <div className="wrap">
                                        <li><a href="https://store.crunchyroll.com">FIGURES & COLLECTIBLES</a></li>
                                    </div>
                                    <div className="wrap">
                                        <li><a href="https://store.crunchyroll.com">ACCESSORIES</a></li>
                                    </div>
                                    <div className="wrap">
                                        <li><a href="https://store.crunchyroll.com">APPAREL</a></li>
                                    </div>
                                    <div className="wrap">
                                        <li><a href="https://store.crunchyroll.com">HOME GOODS</a></li>
                                    </div>
                                    <li><a href="https://store.crunchyroll.com">GIFT CARDS</a></li>
                                </div>
                            </ul>
                        </li>
                        <div className="login">
                            <li><a href="https://www.funimation.com/log-in/">Login</a></li>
                        </div>
                    </ul>
                </div>
            </div >
        </nav >

    );
};

export default NavigationBar;