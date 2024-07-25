import React from 'react';
import './MainButton.css';
import './main.css';

const MainButton = ({content, link, target}) => {
  return (
    <a className="mainButton-link" href={link} target={target}>
        <div className="mainButton">

            <div className="mainButton-content"><p className="mainButton-text">{content}</p></div>
        
        </div> 
    </a>
    
    
  );
};

export default MainButton;