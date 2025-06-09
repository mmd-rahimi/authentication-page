import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./contexts/ThemeContext";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router} from "react-router"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>
);
