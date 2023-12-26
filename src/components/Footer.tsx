// Footer.tsx
import React from 'react';
import './../App.css';
import instagramImage from "./../assets/instagram.svg";
import facebookImage from "./../assets/facebook.svg";
import twitterImage from "./../assets/twitter.svg"
import youtubeImage from "./../assets/youtube.svg"
import pinterestImage from "./../assets/pinterest.svg"
import tiktokImage from "./../assets/tiktok.svg"
import sonyPicture from "./../assets/2b6e796d-2275-41a6-8b90-5d2b3f89f680.png"

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-section">
          <a href="https://www.funimation.com/about-us/" target="https://www.funimation.com/about-us/" rel="noopener noreferrer">
            <h2>ABOUT FUNIMATION</h2>
          </a>
        </div>

        <div className="footer-section">
          <h2>CUSTOMER SUPPORT</h2>
        </div>

        <div className="footer-section">
          <h2>TERMS OF USE</h2>
        </div>

        <div className="footer-section">
          <h2>TERMS OF SALE</h2>
        </div>

        <div className="footer-section">
          <h2>PRIVACY POLICY</h2>
        </div>

        <div className="footer-section">
          <h2>YOUR PRIVACY CHOICES</h2>
        </div>

        <div className="footer-section">
          <h2>CAREERS</h2>
        </div>
        <div className="footer-section">
          <img
            src={sonyPicture}
            alt="Sony Picture"
          />
        </div>
      </div>
      <div>
        <div style={{ position: 'absolute', top: 1550, right: 0, maxHeight: '1000px', overflow: 'auto' }}>
          <a href="./assets/instagram.svg" target="_blank" rel="noopener noreferrer">
            <img
              src={instagramImage}
              alt="Instagram Logo"
              style={{ width: '20px', height: '50px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.facebook.com/funimation" target="https://www.facebook.com/funimation" rel="noopener noreferrer">
            <img
              src={facebookImage}
              alt="Facebook Logo"
              style={{ width: '20px', height: '50px', marginRight: '10px' }}
            />
          </a>
          <a href="./assets/twitter.svg" target="_blank" rel="noopener noreferrer">
            <img
              src={twitterImage}
              alt="Twitter Logo"
              style={{ width: '20px', height: '50px', marginRight: '10px' }}
            />
          </a>
          <a href="./assets/youtube.svg" target="_blank" rel="noopener noreferrer">
            <img
              src={youtubeImage}
              alt="Youtube Logo"
              style={{ width: '20px', height: '50px', marginRight: '10px' }}
            />
          </a>
          <a href="./assets/pinterest.svg" target="_blank" rel="noopener noreferrer">
            <img
              src={pinterestImage}
              alt="Pinterest Logo"
              style={{ width: '20px', height: '50px', marginRight: '10px' }}
            />

          </a>
          <a href="./assets/tiktok.svg" target="_blank" rel="noopener noreferrer">
            <img
              src={tiktokImage}
              alt="Tiktok Logo"
              style={{ width: '20px', height: '50px', marginRight: '10px' }}
            />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
