import React from 'react';
import './../App.css'; // Import your CSS styles
interface HeaderBannerProps {
    bannerImage: string; // SVG media link source
    bannerLogo: string;
    bannerText: string;
    buttonText: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ bannerImage, bannerLogo, bannerText, buttonText }) => {
    return (
        <div className="header-banner-section">
            <div className="header-banner-container">
                <img src={bannerLogo} alt="Banner Logo" className="logo" />
                <div className="header-banner-image">
                    <img src={bannerImage} alt="Banner Logo" className="logo" />
                </div>
                <div className="sub-banner">{bannerText}
                    <a href="header-banner-button" className="header-banner-button">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;
