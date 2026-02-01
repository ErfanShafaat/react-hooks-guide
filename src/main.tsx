import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import TodoReducerExample from './hooks/useReducer/UseReducer'
// import UseImperativeHandleExample from './hooks/useImperativeHandle/useImperativeHandle'
// import UseActionStateExample from './hooks/useActionState/useActionState'
import DebugExample from './hooks/useDebugValue/useDebugValue'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* <TodoReducerExample/> */}
   {/* <UseImperativeHandleExample/> */}
   {/* <UseActionStateExample/> */}
   <DebugExample/>
 
   </StrictMode>,
)
