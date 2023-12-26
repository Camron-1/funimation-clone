import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/PromoRibbon';
import PromoRibbon from './components/PromoRibbon';
import NavigationBar from './components/NavigationBar';
import funimationLogo from './assets/funimation-logo.svg';
import FreeTrialBanner from './components/FreeTrialBanner';
import Footer from './components/Footer';


function App() {
  const subscriptionBannerLink = './assets/home-subscription-banner.mp4';
  return (
    <div className="App">
      <PromoRibbon/>
      <NavigationBar svgImage={funimationLogo} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FreeTrialBanner mediaLink={subscriptionBannerLink} />
      <Footer/>
    </div>
  );
}

export default App;
