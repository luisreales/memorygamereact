import React from 'react'

function Header({ storeName, shuffeCards, turns, matchedCount }) {
  return (
    <div>
      <p>Bienvenido, {storeName}!</p>
      <button onClick={shuffeCards}>Nuevo Juego</button>

      <table className="table table-sm table-style">
        <thead>
          <tr>
            <th>Errores</th>
            <th>Aciertos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fail">{turns}</td>
            <td className="matched">{matchedCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Header
