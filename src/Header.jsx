import React from 'react';
import './Header.css';
import './main.css'
import mainLogo from './assets/mainLogo.png'

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLogo"><img className="headerLogo-img" src={mainLogo} alt="Logomarca Samhost" /></div>
      <nav className="headerNav">
        <ul className="headerNav-list">
            <a className="headerNav-listLink" target="_blank" href="https://samhost.com.br"><li className="headerNav-listItem">Ínicio</li></a>
            <a className="headerNav-listLink" target="_blank" href="https://api.whatsapp.com/send/?phone=5534998803399&text=Olá+%2ASAMHOST%2A%21+Preciso+de+mais+informações+sobre+web-tv-completa+https%3A%2F%2Fsamhost.com.br%2Fweb-tv-completa&type=phone_number&app_absent=0"><li className="headerNav-listItem">Vendas</li></a>
            <a className="headerNav-listLink" target="_blank" href="https://clientes.samhost.com.br/index.php?rp=/login"><li className="headerNav-listItem">Área do Cliente</li></a>
        </ul>
        
      </nav>
    </div>
  );
};

export default Header;