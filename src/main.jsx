import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hai from './Hai.jsx'
import Counter from './Counter.jsx'
import Timer from './Timer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hai />
    <Counter />
    <Timer />
  </StrictMode>,
)
