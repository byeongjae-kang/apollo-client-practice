import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import AuthForm from "../components/AuthForm";
import currentUserQuery from "../queries/currentUser";
import signupMutation from "../mutation/signup";

const SignupPage = () => {
  const [signup] = useMutation(signupMutation);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const signupHandler = ({ email, password }) => {
    signup({
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
      <h3>Sign Up</h3>
      <AuthForm onSignup={signupHandler} errors={errors} />
    </Fragment>
  );
};

export default SignupPage;
