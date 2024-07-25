import React from 'react';
import './Banner.css';
import './main.css'
import MainButton from './MainButton.jsx'


const Banner = () => {
  return (
    <div className="banner">
        <div className="bannerContainer">
            <div className="bannerText">
            <h1 className="bannerText-title">Já imaginou ter o 
seu próprio <strong className="bannerText-titleDestaque">canal de TV?</strong></h1>
            <h2 className="bannerText-subtitle">Criar playlists, transmitir ao vivo e 
agendar programações?</h2>
        </div>
        <div className="bannerButton"><MainButton content="Quero começar!" link="#produtos" /></div>
        
        </div>
        
    </div>
  );
};

export default Banner;