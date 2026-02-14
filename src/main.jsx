import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log("Starting app...");

try {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log("App mounted.");
} catch (error) {
  console.error("Failed to mount app:", error);
  document.getElementById('root').innerHTML = `<div style="color: white; padding: 20px;"><h1>Error mounting app</h1><pre>${error.message}</pre></div>`;
}
