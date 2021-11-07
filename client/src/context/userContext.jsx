import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import currentUserQuery from "../queries/currentUser";
import logoutMutation from "../mutation/logout";
import loginMutation from "../mutation/login.js";
import signupMutation from "../mutation/signup";

const INITIAL_STATE = null;
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(INITIAL_STATE);

  const [logout] = useMutation(logoutMutation);
  const [login] = useMutation(loginMutation);
  const [signup] = useMutation(signupMutation);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const signupHandler = (email, password) => {
    signup({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query: currentUserQuery }]
    })
      .then((res) => {
        setUserState(res.data.login.email);
        navigate("/welcome");
      })
      .catch((error) => {
        const errorMessages = error.graphQLErrors.map((err) => err.message);
        setErrors(errorMessages);
      });
  };

  const loginHandler = (email, password) => {
    login({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query: currentUserQuery }]
    })
      .then((res) => {
        setUserState(res.data.login.email);
        navigate("/welcome");
      })
      .catch((error) => {
        const errorMessages = error.graphQLErrors.map((err) => err.message);
        setErrors(errorMessages);
      });
  };

  const submitHandler = ({ email, password }, isLoggingIn) => {
    if (isLoggingIn) {
      loginHandler(email, password);
    } else {
      signupHandler(email, password);
    }
  };

  const logoutHandler = () => {
    logout({
      refetchQueries: [{ query: currentUserQuery }]
    });
    setUserState(null);
  };

  return (
    <AuthContext.Provider
      value={{ userState, logoutHandler, submitHandler, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
