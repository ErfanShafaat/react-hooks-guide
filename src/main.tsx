import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Counter from './hooks/UseState/UseStateExample'
import UseEffectBestPractices from './hooks/useEffect/useEffecetExample'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* <Counter/> */}
   <UseEffectBestPractices/>
  </StrictMode>,
)
