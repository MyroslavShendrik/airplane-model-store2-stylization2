import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './components/App/App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/airplane-model-store2-stylization2">
      <App />
     </BrowserRouter>
  </StrictMode>,
);

