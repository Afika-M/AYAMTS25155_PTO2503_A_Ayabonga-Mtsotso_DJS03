import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
/**Renders the main application within a StrictMode wrapper
 * @returns JSX.Element
 */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
