import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import '@aws-amplify/ui-react/styles.css';
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { DataStore } from '@aws-amplify/datastore';


Amplify.configure(outputs);


DataStore.configure({
  // Qualquer configuração específica que você precise para o DataStore
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
