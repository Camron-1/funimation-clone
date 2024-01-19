// Footer.tsx
import React from 'react';
import './../styles/App.css';
import instagramImage from "./../assets/instagram.svg";
import facebookImage from "./../assets/facebook.svg";
import twitterImage from "./../assets/twitter.svg"
import youtubeImage from "./../assets/youtube.svg"
import pinterestImage from "./../assets/pinterest.svg"
import tiktokImage from "./../assets/tiktok.svg"
import sonyPicture from "./../assets/2b6e796d-2275-41a6-8b90-5d2b3f89f680.png"
import checkBox from "./../assets/checkmark.png"
const Footer: React.FC = () => {
  return (
    <footer className="footer-container">

      <div className="footer-links">
        <div className="footer-section">
          <a href="https://www.funimation.com/about-us/" target="https://www.funimation.com/about-us/" rel="noopener noreferrer">
            <h2>ABOUT FUNIMATION</h2>
          </a>
          <div className="footer-section">
            <a href="https://help.funimation.com/hc/en-us" target="https://help.funimation.com/hc/en-us" rel="noopener noreferrer">
              <h2>CUSTOMER SUPPORT</h2>
            </a>
          </div>

          <div className="footer-section">
            <a href="https://www.funimation.com/terms-of-use/" target="https://www.funimation.com/terms-of-use/" rel="noopener noreferrer">
              <h2>TERMS OF USE</h2>
            </a>
          </div>

          <div className="footer-section">
            <a href="https://www.funimation.com/terms-of-sale/" target="https://www.funimation.com/terms-of-sale/" rel="noopener noreferrer">
              <h2>TERMS OF SALE</h2>
            </a>
          </div>

          <div className="footer-section">
            <a href="https://www.sonypictures.com/corp/privacy.html" target="https://www.sonypictures.com/corp/privacy.html" rel="noopener noreferrer">
              <h2>PRIVACY POLICY</h2>
            </a>
          </div>

          <div className="footer-section">

            <a href="https://privacyportal-cdn.onetrust.com/dsarwebform/d19e506f-1a64-463d-94e4-914dd635817d/b9eb997c-9ede-451b-8fd4-29891782a928.html" target="https://privacyportal-cdn.onetrust.com/dsarwebform/d19e506f-1a64-463d-94e4-914dd635817d/b9eb997c-9ede-451b-8fd4-29891782a928.html" rel="noopener noreferrer" >
              <h2>YOUR PRIVACY CHOICES</h2>
              <div className="picture-image">
                <img
                  src={checkBox}
                  alt="Check Box"
                />
              </div>
            </a>
          </div>

          <div className="footer-section">
            <a href="https://www.crunchyroll.com/about/jobs/index.html" target="https://www.crunchyroll.com/about/jobs/" rel="noopener noreferrer">
              <h2>CAREERS</h2>
            </a>
          </div>
          <div className="footer-section">
            <img
              src={sonyPicture}
              alt="Sony Picture"
            />
          </div>
        </div>
        <div className='flex grid object-right'>
          <div className='flex space-x-3.5'>
            <a href="https://www.facebook.com/funimation" target="https://www.facebook.com/funimation" rel="noopener noreferrer">
              <img
                src={facebookImage}
                alt="Instagram Logo Facebook Logo"
              />
            </a>
            <a href="https://twitter.com/funimation" target="https://twitter.com/funimation" rel="noopener noreferrer">
              <img
                src={twitterImage}
                alt="Twitter Logo"
              />
            </a>
            <a href="https://www.youtube.com/user/FUNimation" target="https://www.youtube.com/user/FUNimation" rel="noopener noreferrer">
              <img
                src={youtubeImage}
                alt="Youtube Logo"
              />
            </a>
            <a href="https://www.instagram.com/funimation" target="https://www.instagram.com/funimation" rel="noopener noreferrer">
              <img
                src={instagramImage}
                alt="Instagram Logo"
              />
            </a>
            <a href="https://www.pinterest.com/funimation/" target="https://www.pinterest.com/funimation/nk" rel="noopener noreferrer">
              <img
                src={pinterestImage}
                alt="Pinterest Logo"
              />
            </a>
            <a href="https://www.tiktok.com/@funimation" target="https://www.tiktok.com/@funimation" rel="noopener noreferrer">
              <img
                src={tiktokImage}
                alt="Tiktok Logo"
              />
            </a>
          </div>
          <div className='flex'>
            <p style={{ fontSize: '12.5px' }}>© Crunchyroll, LLC. All Rights Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
