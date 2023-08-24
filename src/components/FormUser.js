import React, { useState } from 'react'

/*
Componente FormUser  para el manejo del formulario de usuario, recibe la funcion onSubmitUserForm para setear el valor en el App.js
*/
const FormUser = ({ onSubmitUserForm }) => {
  const [userName, setUserName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const userNameChange = (e) => {
    setUserName(e.target.value)
  }

  const eventSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (userName.trim() !== '') {
      onSubmitUserForm(userName)

      localStorage.setItem('userName', userName)
    }
  }
  return (
    <div className="container col-5 mt-5">
      <form onSubmit={eventSubmit}>
        <div className="form-group">
          <label htmlFor="username">Escribe tu nombre:</label>
          <input
            type="text"
            className={`form-control ${
              submitted && userName.trim() === '' ? 'is-invalid' : ''
            }`}
            id="username"
            value={userName}
            onChange={userNameChange}
          />
          {submitted && userName.trim() === '' && (
            <div className="invalid-feedback">* Nombre es requerido.</div>
          )}
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  )
}

export default FormUser
