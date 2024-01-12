import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './components/PromoRibbon';
import PromoRibbon from './components/PromoRibbon';
import NavigationBar from './components/NavigationBar';
import funimationLogo from './assets/funimation-logo.svg';
import bannerImage from './assets/one-piece-wallpaper.png';
import bannerLogo from './assets/one-piece-wallpaper.png';
import searchIcon from './assets/icon-search.svg';
import FreeTrialBanner from './components/FreeTrialBanner';
import Footer from './components/Footer';
import HeaderBanner from './components/HeaderBanner';


function App() {
  const subscriptionBannerLink = 'https://storfrontcommon.s3.amazonaws.com/videos/eda5cb20-2efb-47ec-9f47-5af546833f50.mp4';
  const bannerText = 'Avast me hearties! One Piece is NOW STREAMING in both Sub and Dub on Crunchyroll. Sign up to start watching today.';
  const bannerButtonText = 'Jump Aboard';

  return (
    <div className="App">
      <header>
        <PromoRibbon />
        <NavigationBar homeSvgImage={funimationLogo} searchSvgImage={searchIcon} />
      </header>
      <HeaderBanner bannerImage={bannerImage} bannerLogo={bannerLogo} bannerText={bannerText} buttonText={bannerButtonText} />
      <FreeTrialBanner mediaLink={subscriptionBannerLink} />
      <Footer />
    </div>
  );
}

export default App;
