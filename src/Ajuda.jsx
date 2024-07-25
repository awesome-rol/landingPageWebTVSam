import React from 'react';
import MainButton from './MainButton.jsx'
import './main.css'
import './Ajuda.css'

const Ajuda = () => {
  return (
    <div className="ajudaContainer">
      <h2 className="ajudaTitle">Precisa de ajuda?</h2>
      <div className="ajudaButton"><MainButton content="Fala com a gente!" link="https://api.whatsapp.com/send/?phone=5534998803399&text=Olá+%2ASAMHOST%2A%21+Preciso+de+mais+informações+sobre+web-tv-completa+https%3A%2F%2Fsamhost.com.br%2Fweb-tv-completa&type=phone_number&app_absent=0" target="_blank" /></div>
      
    </div>
  );
};

export default Ajuda;