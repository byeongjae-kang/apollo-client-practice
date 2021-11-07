import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { AuthContextProvider } from "./context/userContext";

import App from "./App";
import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
  })
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
