import React from 'react'
/*
Componente AlertMessage  para el manejo del mensaje que se le muestra al usuario cuando gana el partido
*/
function AlertMessage({ message, icon }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="alert-container primary">
            <span className="alert-text">{message}</span>
            <span className="alert-icon">{icon}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertMessage
