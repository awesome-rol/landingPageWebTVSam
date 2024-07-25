import React from 'react';
import logo from './assets/logoRodape.png';
import facebook from './assets/facebook-icon.png';
import instagram from './assets/instagram-icon.png';
import whatsapp from './assets/whatsapp-icon.png';
import './Rodape.css';
import './main.css';

const Rodape = () => {
  return (
    <div className="rodapeContainer">
      <div className="rodapeLogo-container">
        <img className="rodapeLogo-img" src={logo} alt="Logomarca Samhost" />
        <p className="rodapeCnpj">CNPJ:  42.206.340/0001-13</p>
      </div>
    <div>
      <div className="rodapeSocial">
        <div className="rodapeRedes">
        <a href="https://www.facebook.com/gruposamhost" target='_blank'><img className="rodapeRedes-img" src={facebook} alt="Facebook da Samhost" /></a>
        <a href="https://www.instagram.com/samhoststreaming/" target='_blank'><img className="rodapeRedes-img" src={instagram} alt="Instagram da Samhost" /></a>
      </div>
      <div className="rodapeWhats">
        <a href="https://api.whatsapp.com/send/?phone=5534998803399&text=Olá+%2ASAMHOST%2A%21+Preciso+de+mais+informações+sobre+web-tv-completa+https%3A%2F%2Fsamhost.com.br%2Fweb-tv-completa&type=phone_number&app_absent=0" target='_blank'><img className="rodapeWhats-img" src={whatsapp} alt="Ícone whatsapp" /></a>
        <p className="rodapeWhats-num">(34) 99880-3399</p>
      </div>
      </div>
    
    </div>
    </div>
      
  );
};

export default Rodape;