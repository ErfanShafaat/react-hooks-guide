import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4 p-3 border rounded text-center" style={{ maxWidth: "300px" }}>
      <h3 className="mb-3">Counter</h3>
      <p className="fs-4">Count: <span className="badge bg-primary">{count}</span></p>
      <button
        className="btn btn-success"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
