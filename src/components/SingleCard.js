import React from 'react'
import './SingleCard.css'
/*
Componente SingleCard  para el manejo de las cartas que se muestran al usuario tanto la que cubre como la posterior.
*/

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className={flipped ? 'flipped' : ''}>
            <img className="front" src={card.src} alt="card front" />
            <img
              className="back"
              src="/img/cover.png"
              alt="card back"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
