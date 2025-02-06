import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import "normalize.css";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";


createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
    <ToastContainer theme={"dark"} />
  </Router>
)
