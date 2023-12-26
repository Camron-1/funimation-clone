import React from 'react';
import './../App.css'; // Import your CSS styles
interface FreeTrialBannerProps {
    mediaLink: string; // SVG media link source
}

const FreeTrialBanner: React.FC<FreeTrialBannerProps> = ({ mediaLink }) => {
  return (
    <div className="banner-container">
      <video autoPlay loop muted className="video-banner">
        {/* Provide the path to your video file */}
        <source src={mediaLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-container">
        <div className="main-banner">
          Stream Ad-Free Anime with Premium Plus for $9.99 a month
        </div>
        <div className="sub-banner">
          Enjoy over 10,000 episodes and movies from our huge library of subs and dubs, featuring a deep catalog of big hits, fan favorites, and all-time classics, as well as the latest shows out of Japan.
        </div>
        <a href="link-to-start-trial" className="start-trial-button">Start My Free Trial</a>
      </div>
    </div>
  );
};

export default FreeTrialBanner;
