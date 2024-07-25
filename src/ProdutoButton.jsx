import React from 'react';
import "./ProdutoButton.css"
import './main.css';

const ProdutoButton = ({link}) => {
  return (
    <a href={link} className="produtoButton-link">
        <div className="produtoButtonContainer"> 
            <p className="produtoButton-text">Contratar!</p>
        </div>
    </a>
  );
};

export default ProdutoButton;