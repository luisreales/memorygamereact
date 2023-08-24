import React from 'react'

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
