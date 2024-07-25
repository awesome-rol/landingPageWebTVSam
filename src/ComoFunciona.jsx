import React from 'react';
import "./ComoFunciona.css";
import './main.css'

const comoFuncionaList = [
    {id: 1, text: "1) Após a contratação você receberá um email com todas as informações e orientações (video aulas, tutoriais, etc)"},
    {id: 2, text: "2) Através do nosso exclusivo painel de Streaming de Web TV você poderá enviar seus vídeos, criar suas Playlists, gerar sua grade de programação e pronto, sua Web TV já estará no ar 24 horas."},
    {id: 3, text: "3) Se desejar transmitir ao vivo, poderá fazê-lo quando quiser utilizando o OBS (software gratuito) através de seu PC ou também pelo seu Celular utilizando o aplicativo Manycam (gratuito)."},
    {id: 4, text: "4) Diretamente do seu Painel de TV crie retransmissões para suas páginas e ou perfis do Facebook e Canais Youtube. Assim sua Web TV será distribuida  simultaneamente para seu site, APP e Redes Sociais."}
]

const ComoFunciona = () => {
  return (
    <div className="comoFuncionaContainer">
      <h2 className="comoFuncionaTitle">Como Funciona?</h2>
      <ol className="comoFuncionaList">
        {comoFuncionaList.map((item) => (
            <li key={item.id} className="comoFuncionaItem">{item.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default ComoFunciona;