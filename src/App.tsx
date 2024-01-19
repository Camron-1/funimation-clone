import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './components/PromoRibbon';
import PromoRibbon from './components/PromoRibbon';
import NavigationBar from './components/NavigationBar';
import funimationLogo from './assets/funimation-logo.svg';
import bannerLogo from './assets/one-piece-logo.png';

import searchIcon from './assets/icon-search.svg';
import FreeTrialBanner from './components/FreeTrialBanner';
import Footer from './components/Footer';
import HeaderBanner from './components/HeaderBanner';
import Row from './components/Row';
import request from './request';
import { readConfigFile } from 'typescript';



function App() {
  const subscriptionBannerLink = 'https://storfrontcommon.s3.amazonaws.com/videos/eda5cb20-2efb-47ec-9f47-5af546833f50.mp4';
  const bannerText = 'Avast me hearties! One Piece is NOW STREAMING in both Sub and Dub on Crunchyroll. Sign up to start watching today.';
  const bannerButtonText = 'Jump Aboard';

  return (
    <div className="App">
      <header>
        <PromoRibbon />
        <NavigationBar homeSvgImage={funimationLogo} searchSvgImage={searchIcon} />
        <HeaderBanner bannerLogo={bannerLogo} bannerText={bannerText} buttonText={bannerButtonText} />
      </header>
      <Row title="Continuing Simulcasts & New Dubs (Find More on Crunchyroll)" fetchUrl={request.fetchSimulcastsDubShows} />
      <Row title="Round Up: Some Popular Shows of 2023" fetchUrl={request.fetchRoundUpShows} />
      <Row title="For The Sci-Fi Crowd" fetchUrl={request.fetchSciFiShows} />
      <Row title="Just Add Water" fetchUrl={request.fetchJustAddWaterShows} />
      <Row title="Eerie-sistable Anime" fetchUrl={request.fetchEerieShows} />
      <Row title="Shows To Binge Like a Demon" fetchUrl={request.fetchDemonShows} />
      <Row title="Pirates, Bandits, and Outlaws!" fetchUrl={request.fetchPirateShows} />
      <Row title="You've Gotta Be Kitten Me! Anime With Cattitude" fetchUrl={request.fetchKittenShows} />
      <FreeTrialBanner mediaLink={subscriptionBannerLink} />
      <Footer />

    </div>
  );
}

export default App;
