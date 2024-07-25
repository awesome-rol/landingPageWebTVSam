import React from 'react';
import siteAdminIcon from './assets/site.png';
import transmissaoIcon from './assets/transmissao.png';
import playlistIcon from './assets/playlist.png';
import trafegoIcon from './assets/trafego.png';
import appAndroidIcon from './assets/android.png';
import youtubeIcon from './assets/youtube.png';
import registroIcon from './assets/registro.png';
import transmiIcon from './assets/transmissao.png';
import './Recursos.css';
import './main.css';


const recursosList = [
    {id: 1, text: "Site administrável", src: siteAdminIcon, alt: "Ícone de site administrável"},
    {id: 2, text: "Transmissão simultânea nas redes sociais", src: transmissaoIcon, alt: "Ícone de transmissão simultânea nas redes sociais"},
    {id: 3, text: "Criação de playlists agendadas", src: playlistIcon, alt: "Ícone de criação de playlists agendadas"},
    {id: 4, text: "Tráfego ilimitado", src: trafegoIcon, alt: "Ícone de tráfego ilimitado"},
    {id: 5, text: "Aplicativo Android exclusivo", src: appAndroidIcon, alt: "Ícone de aplicativo Android exclusivo"},
    {id: 6, text: "Youtube Downloader", src: youtubeIcon, alt: "Ícone de Youtube Downloader"},
    {id: 7, text: "Registro de domínio grátis (.site, .online)", src: registroIcon, alt: "Ícone de registro de domínio grátis"},
    {id: 8, text: "Transmissões ao vivo ilimitadas (PC e celular)", src: transmiIcon, alt: "Ícone de transmissões ao vivo ilimitadas"},
]

const Recursos = () => {
  return (
    <div className="recursosContainer">
      <h2 className="recursosTitle">Recursos</h2>
      <div className="recursosListContainer">
        <ul className="recursosList">
            {recursosList.map((item) => (
                <li className="recursosItem">
                    <img src={item.src} alt={item.alt} />
                    <p>{item.text}</p>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Recursos;