import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './hooks/UseState/UseStateExample'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Counter/>
  </StrictMode>,
)
