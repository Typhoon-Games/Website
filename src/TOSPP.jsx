import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './TOSPP.css';

function TOSPP() {
  return (
    <div className="app-container">
      <Header />
     <div class="TOS-Container">
      <h2>Terms of Service and Privacy Policy</h2>
       
      <h3>Terms of Service</h3>
      <p>Typhoon provides a platform for playing games that may not be censored/blocked and a web proxy to access blocked websites. By using our website, you agree to the following terms of service:</p>
      
      <ul>
        <li>Typhoon is not responsible for the sites you visit or the games you play through our web proxy.</li>
        <li>You are solely responsible for the content you access through our web proxy.</li>
        <li>You are not permitted to use the site for any illegal activity.</li>
      </ul>
    
      <h3>Privacy Policy</h3>
      <p>We respect your privacy and are committed to protecting your personal information. Our privacy policy explains how we collect, use, and share your information:</p>
    
      <ul>
        <li>Typhoon does not keep logs or track your online activities.</li>
        <li>We do not share any of your data with third parties.</li>
      </ul>
     </div>
    <Footer />
   </div>
  );
}

export default TOSPP;