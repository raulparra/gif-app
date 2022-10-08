import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './style.css'  //importar CSS aquí para que se aplique de manera global


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftExpertApp /> {/* importamos nuestro componente padre*/}
  </React.StrictMode>
)
