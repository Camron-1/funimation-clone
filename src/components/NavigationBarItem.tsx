// NavigationBarItem.tsx

import React from 'react';
import './../styles/App.css';

interface NavigationBarLinksProps {
    name: string;
    url?: string; // Optional property
}

interface NavigationBarItemProps {
    label: string; // Label Name
    links?: NavigationBarLinksProps[];
}

const NavigationBarItem: React.FC<NavigationBarItemProps> = ({ label, links }) => {
    return (
        <div className="
            uppercase
            text-sm
            text-[#410099] 
            font-bold
            cursor-pointer 
            hover:text-red-600 
            transition
            px-8
            space-y-4
            space-x-4">

            <ul>{label}
                {links?.map((link) => (
                    <li>{link.name}
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                        </a>
                    </li>
                ))}
            </ul>

            
        </div>
    );
};

export default NavigationBarItem;