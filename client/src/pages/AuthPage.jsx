import { Fragment, useContext } from "react";
import { AuthContext } from "../context/userContext";
import AuthForm from "../components/AuthForm";

const AuthPage = ({ isLoggingIn }) => {
  const { submitHandler, errors } = useContext(AuthContext);
  const pageTitle = isLoggingIn ? "Sign In" : "Sign Up";

  return (
    <Fragment>
      <h3>{pageTitle}</h3>
      <AuthForm
        isLoggingIn={isLoggingIn}
        onSubmitForm={submitHandler}
        errors={errors}
      />
    </Fragment>
  );
};

export default AuthPage;
