import React from 'react';
import okIcon from './assets/ok-icon.png'
import ProdutoButton from './ProdutoButton.jsx';
import './Produtos.css';
import './main.css';

const produtosList = [
{id: 1, name: "TV COMPLETA", preco: "R$ 99,90/mês", kbps: 2500, gbVideos: 80, velocidadePorta: 2.5, appMulti: true, app: false, src: "https://clientes.samhost.com.br/index.php?rp=/store/webtv-painel-samcast/web-tv-completa-1"}, 
{id: 2, name: "TV PRO", preco: "R$ 149,90/mês", kbps: 4100, gbVideos: 100, velocidadePorta: 4, appMulti: false, app: true, src: "https://clientes.samhost.com.br/index.php?rp=/store/webtv-painel-samcast/web-tv-pro"},
{id: 3, name: "TV PREMIUM", preco: "R$ 249,90/mês", kbps: 5000, gbVideos: 120, velocidadePorta: 5, appMulti: false, app: true, src: "https://clientes.samhost.com.br/index.php?rp=/store/webtv-painel-samcast/web-tv-premium-samcast"},
{id: 4 , name: "TV MASTER", preco: "R$ 349,90/mês", kbps: 6000, gbVideos: 150, velocidadePorta: 6, appMulti: false, app: true, src: "https://clientes.samhost.com.br/index.php?rp=/store/webtv-painel-samcast/web-tv-master" },
]
const Produtos = () => {
  return (
    <div className="produtosContainer" id="produtos">
      <h2 className="produtosTitle">Nossos produtos</h2>
      <div className="produtosListContainer">
        {produtosList.map((item) => (
            <div className="produto" key={item.id}>
                <div className="produtoTitleContainer">
                    <div className="produtoTitle">
                    <h3 className="produtoTitle-text">{item.name}</h3>
                </div>
                </div>
                <div className="produtoValor">
                    <p>{item.preco}</p>
                </div>
                <div className="produtoInfo">
                    <ul className="produtoInfo-list">
                        <li className="produtoInfo-item"><img className="produtoOk" src={okIcon} alt="Ok" />{`${item.kbps} kbps para transmitir ao vivo`}</li>
                        <li className="produtoInfo-item"><img className="produtoOk" src={okIcon} alt="Ok" />{`${item.gbVideos} GB para vídeos`}</li>
                        <li className="produtoInfo-item"><img className="produtoOk" src={okIcon} alt="Ok" />{`Porta com velocidade de ${item.velocidadePorta}GB`}</li>
                        {item.appMulti && (
                            <li className="produtoInfo-item" key={item.id}><img className="produtoOk" src={okIcon} alt="Ok" />App Web Multi Android e IOS</li>
                        )}
                        {item.app && (
                            <li className="produtoInfo-item" key={item.id}><img className="produtoOk" src={okIcon} alt="Ok" />App publicado na Play Store</li>
                        )}
                    </ul>
                </div>
                <ProdutoButton link={item.src} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;