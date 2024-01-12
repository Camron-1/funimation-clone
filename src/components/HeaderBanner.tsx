import React from 'react';
import './../styles/App.css'; // Import your CSS styles
interface HeaderBannerProps {
    bannerImage: string; // SVG media link source
    bannerLogo: string;
    bannerText: string;
    buttonText: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ bannerImage, bannerLogo , bannerText, buttonText }) => {
  return (
    <div className="header-banner-container">
            <div className="header-banner-image">
                <img src={bannerLogo} alt="Banner Logo" className="logo" />
            </div>
        <div className="sub-banner">{bannerText}</div>
        <a href="header-banner-button" className="header-banner-button">{buttonText}</a>
    </div>
  );
};

export default HeaderBanner;
