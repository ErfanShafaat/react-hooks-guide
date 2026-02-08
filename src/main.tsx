import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import TodoReducerExample from './hooks/useReducer/UseReducer'
// import UseImperativeHandleExample from './hooks/useImperativeHandle/useImperativeHandle'
// import UseActionStateExample from './hooks/useActionState/useActionState'
// import DebugExample from "./hooks/useDebugValue/useDebugValue";
// import OptimisticLikes from "./hooks/useOptimistic/useOptimistic";
import ChatExample from "./hooks/useEffectEvent/useEffectEvent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TodoReducerExample/> */}
    {/* <UseImperativeHandleExample/> */}
    {/* <UseActionStateExample/> */}
    {/* <DebugExample/> */}
    {/* <OptimisticLikes/> */}
    <ChatExample />
  </StrictMode>,
);
