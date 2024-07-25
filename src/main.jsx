import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import Produtos from './Produtos.jsx'
import Recursos from './Recursos.jsx'
import ComoFunciona from './ComoFunciona.jsx'
import Ajuda from './Ajuda.jsx'
import Rodape from './Rodape.jsx'

import './reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Produtos />
    <Recursos />
    <ComoFunciona />
    <Ajuda />
    <Rodape />
  </React.StrictMode>,
)
