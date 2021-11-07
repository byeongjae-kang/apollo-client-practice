import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

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
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
