import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Counter from './hooks/UseState/UseStateExample'
// import UseEffectBestPractices from './hooks/useEffect/useEffecetExample'
import UseMemoExample from './hooks/useMemo/useMemo'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* <Counter/> */}
   {/* <UseEffectBestPractices/> */}
  <UseMemoExample/>
  </StrictMode>,
)
