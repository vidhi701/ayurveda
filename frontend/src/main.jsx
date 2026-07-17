import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
=======
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// Fonts
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> adaeb7c955ed8cf5879a23fb13152f8b1b6dc744
  </React.StrictMode>
);