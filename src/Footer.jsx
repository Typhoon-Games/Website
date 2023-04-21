import React from 'react';
import './Footer.css';
import { Obfuscated, discordLink, githubLink } from './Consts';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img className="footer-logo" src="/small.svg" />
        <p className="footer-slogan"><Obfuscated>Typhoon</Obfuscated></p>
        <p className="footer-text"><Obfuscated>An open-source games site with a tropical theme.</Obfuscated></p>
      </div>
      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <a href={discordLink}>
            <li>Discord</li>
          </a>
          <a href={githubLink}>
            <li>GitHub</li>
          </a>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Pages</h3>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Credits</h3>
        <ul>
          <li>Developer: Riftriot#8325</li>
          <li><Obfuscated>Game Contributors: SYBO, Epic Games, Hipster Whale</Obfuscated></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <a href={discordLink}>
            <li><Obfuscated>Discord:</Obfuscated> {discordLink}</li>
          </a>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <a href="/tosandprivacy">
            <li>TOS and Privacy Policy</li>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;