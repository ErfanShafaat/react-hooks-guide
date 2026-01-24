import { useRef } from "react";
 const UseRefExample = ()=>{
    const inputRef = useRef<HTMLInputElement | null > (null );
    
    const handleFocus = ()=>{
        inputRef.current?.focus()
    }
    
return (
   <div>
    <input type="text" ref={inputRef} placeholder="type here ...." />
    <button onClick={handleFocus}> focus </button>
   </div>
)
}
export default UseRefExample