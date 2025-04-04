import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use "createRoot"
import App from "./App";
import { BrowserRouter } from "react-router-dom";  // ✅ Ensure React Router is imported

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
