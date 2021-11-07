import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import AuthForm from "../components/AuthForm";
import currentUserQuery from "../queries/currentUser";
import loginMutation from "../mutation/login.js";

const SigninPage = () => {
  const [login] = useMutation(loginMutation);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const loginHandler = ({ email, password }) => {
    login({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query: currentUserQuery }]
    })
      .then(() => {
        navigate("/welcome");
      })
      .catch((error) => {
        const errorMessages = error.graphQLErrors.map((err) => err.message);
        setErrors(errorMessages);
      });
  };

  return (
    <Fragment>
      <h3>Sign In</h3>
      <AuthForm onLogin={loginHandler} errors={errors} />
    </Fragment>
  );
};

export default SigninPage;
