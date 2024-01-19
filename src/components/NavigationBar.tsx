// NavigationBar.tsx

import React, { useState } from 'react';
import './../styles/App.css';
import NavigationBarItem from './NavigationBarItem';


interface NavigationBarProps {
    homeSvgImage: string; // SVG image source
    searchSvgImage: string; // SVG image source
}

const NavigationBar: React.FC<NavigationBarProps> = ({ homeSvgImage, searchSvgImage }) => {
    const [searchFunimation, setSearchFunimation] = useState(false);
    const streamLinks = '[{"name": "All Titles", "url":"https://www.funimation.com/shows/"}, {"name": "Current Season", "url":"https://www.funimation.com/simuldubs/"}, {"name": "Schedule", "url":"https://www.funimation.com/schedule/"}]'
    const discoverLinks = '[{"name": "Games", "url":"https://www.funimation.com/shows/"}, {"name": "News", "url":"https://www.funimation.com/simuldubs/"}, {"name": "Theatrical", "url":"https://www.funimation.com/schedule/"}]'
    const shopLinks = '[{"name": "Home Video", "url":"https://www.funimation.com/shows/"}, {"name": "Pre-Orders", "url":"https://www.funimation.com/simuldubs/"}, {"name": "Figures & Collectibles", "url":"https://www.funimation.com/schedule/"}, {"name": "Accessories", "url":"https://www.funimation.com/shows/"}, {"name": "Apparel", "url":"https://www.funimation.com/simuldubs/"}, {"name": "Home Goods", "url":"https://www.funimation.com/schedule/"}, {"name": "Gift Cards", "url":"https://www.funimation.com/schedule/"}]'
    return (

        <nav className="
            transition 
            duration-500
            ">

            <div className="
                md:px-8
                flex 
                items-center 
                flex-row
                transition 
                duration-500
            ">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={homeSvgImage} alt="Home Logo" className="logo" />
                </a>

                <div className="flex pl-20  " />
                <NavigationBarItem label="Stream" links={JSON.parse(streamLinks)} />
                <NavigationBarItem label="Discover" links={JSON.parse(discoverLinks)} />
                <NavigationBarItem label="Shop" links={JSON.parse(shopLinks)} />
                <div />
                <div className='className="flex flex-row ml-auto' />
                <NavigationBarItem label="Log In" />
                <button onClick={() => setSearchFunimation(searchFunimation)}>
                    <img src={searchSvgImage} alt="Search" className="search-icon" />
                </button>
                <div />
            </div>
            <div className="flex flex-row items-center ">
                <input type="text" id="search-bar-input" className="
                block 
                rounded-md
                px-6
                w-full
                text-md" name="search" ng-model="search" required placeholder="Search Funimation" />
                <button type="submit" className="bg-red-600 text-white hover:text-red-600 bg-white">Search</button>
            </div>
        </nav >
    );
};

export default NavigationBar;