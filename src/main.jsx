import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Apply stored theme before paint
const stored = localStorage.getItem('am-theme');
const theme = stored || 'dark';
if (theme === 'dark') document.documentElement.classList.add('dark');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
