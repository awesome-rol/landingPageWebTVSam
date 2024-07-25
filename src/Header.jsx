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
            <a className="headerNav-listLink" href=""><li className="headerNav-listItem">Ínicio</li></a>
            <a className="headerNav-listLink" href=""><li className="headerNav-listItem">Vendas</li></a>
            <a className="headerNav-listLink" href=""><li className="headerNav-listItem">Área do Cliente</li></a>
        </ul>
        
      </nav>
    </div>
  );
};

export default Header;