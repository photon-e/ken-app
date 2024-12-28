import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>carpenter</span>
            <span>clearning</span>
            <span>painter</span>
            <span>doors</span>
            <span>plumber</span>
            <span>pool</span>
            <span>cctv</span>
            <span>solar</span>
            <span>tiling</span>
            <span>windows</span>
            <span>tree services</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a professional</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Alpha</h2>
            <span>Alpha Business</span>
            <span>Alpha Pro</span>
            <span>services near me</span>
            <span>Alpha Guides</span>
            <span>Get Inspired</span>
            <span>Alpha Select</span>
            <span>ClearVoice</span>
            <span>Alpha Workspace</span>
            <span>Learn</span>
            <span>home inspiration pictures</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Alpha</h2>
            <span>© Alpha International Ltd. 2025</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
