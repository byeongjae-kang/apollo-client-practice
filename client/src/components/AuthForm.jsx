import { useState } from "react";

const INITIAL_STATE = { email: "", password: "" };

const AuthForm = ({ isLoggingIn, onSubmitForm, errors }) => {
  const [input, setInput] = useState(INITIAL_STATE);

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmitForm(input, isLoggingIn);
    setInput(INITIAL_STATE);
  };

  return (
    <div className="row">
      <form className="col s6" onSubmit={submitHandler}>
        <div className="input-field">
          <input
            placeholder="Email"
            type="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
        {errors?.map((err, index) => (
          <p key={index} className="error">
            {err}
          </p>
        ))}
      </form>
    </div>
  );
};

export default AuthForm;
