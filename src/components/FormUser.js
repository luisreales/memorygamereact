import React, { useState } from 'react'

const FormUser = ({ onSubmitUserForm }) => {
  const [userName, setUserName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const userNameChange = (e) => {
    setUserName(e.target.value)
  }

  const eventSubmit = (e) => {
    e.preventDefault()
    if (userName.trim() !== '') {
      onSubmitUserForm(userName)
      setSubmitted(true)
      localStorage.setItem('userName', userName)
      alert('User' + userName + ' saved locally')
    }
  }
  return (
    <div className="container col-5 mt-5">
      <form onSubmit={eventSubmit}>
        <div className="form-group">
          <label htmlFor="username">Ingrese nombre de usuario:</label>
          <input
            type="text"
            className={`form-control ${
              submitted && userName.trim() === '' ? 'is-invalid' : ''
            }`}
            id="username"
            value={userName}
            onChange={userNameChange}
            required
          />
          {submitted && userName.trim() === '' && (
            <div className="invalid-feedback">Username is required.</div>
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
