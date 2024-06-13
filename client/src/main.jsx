import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/auth";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";
import FullScreenLoader from "./components/fullScreenLoader/FullScreenLoader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <FullScreenLoader />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
