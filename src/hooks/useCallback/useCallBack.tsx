import { useState , useCallback } from "react";


const UseCallBackExample = ()=>{

    let [count , setCount ] = useState<number>(0)
    let increment = useCallback(() : void=>{
       setCount(prev => prev + 1)
    },[])
    return(
        <div className="container mt-4">
      <div className="card p-3 text-center">
        <p className="fs-5 mb-3">Count: {count}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
    )
}
export default UseCallBackExample