import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from "./components/App";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";



Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
