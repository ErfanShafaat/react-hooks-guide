import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoReducerExample from './hooks/useReducer/UseReducer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <TodoReducerExample/>
  </StrictMode>,
)
