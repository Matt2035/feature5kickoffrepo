import React from "react";

const AuthForm = (user, onChange, onSubmit) => {
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <div>
          <label>First Name</label>
          <input
            type="text"
            id="first-name-input"
            value={user.firstName}
            name="firstName"
            placeholder="first name"
            required
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            id="last-name-input"
            value={user.lastName}
            name="lastName"
            placeholder="last name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email-input"
            value={user.email}
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password-input"
            value={user.password}
            name="password"
            placeholder="password"
            required
          />
        </div>

        <div>
          <button type="submit" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
