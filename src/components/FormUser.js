import React, { useState } from 'react';

const FormUser = () => {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);

    // Validate before submitting
    if (username.trim() === '') {
      return; // Do not submit if the username is empty
    }

    // Perform further actions here, such as sending the data to a server.
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className={`form-control ${submitted && username.trim() === '' ? 'is-invalid' : ''}`}
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          {submitted && username.trim() === '' && <div className="invalid-feedback">Username is required.</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FormUser