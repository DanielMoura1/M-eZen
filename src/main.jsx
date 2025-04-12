import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Cadastro from './cadastro.jsx';
import Home from './home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter> {/* <-- Envolva aqui */}
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
</StrictMode>,
)
