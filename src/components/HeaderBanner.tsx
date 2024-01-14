import React from 'react';

interface HeaderBannerProps {
  bannerLogo: string;
  bannerText: string;
  buttonText: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ bannerLogo, bannerText, buttonText }) => {
  return (
    <header className="p-32 bg-cover bg-center bg-[url('./assets/one-piece-wallpaper.png')]">
         <div>
          <img className="h-40" src={bannerLogo} alt="Banner Logo" />
          </div>

          <div className="max-w-screen-sm text-white p-5 text-base ">{bannerText}</div>
            <button className="bg-cyan-400 text-white font-bold w-64 h-14 rounded-xl uppercase">{buttonText}</button>
          
    </header>
  );
};

export default HeaderBanner;
