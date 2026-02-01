import React, { useState, useDebugValue } from "react";


const DebugExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");


  useDebugValue(count, (value) => `Count is ${value}`);
  useDebugValue(text, (value) => `Text length: ${value.length}`);

  return (
    <div className="container mt-5">
      <h2>useDebugValue Example</h2>

      <div className="mb-3">
        <label htmlFor="textInput" className="form-label">
          Type something:
        </label>
        <input
          id="textInput"
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <p>
          <strong>Count:</strong> {count}
        </p>
        <button
          className="btn btn-primary me-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>

      <div className="alert alert-info">
        Open <strong>React DevTools</strong> and inspect this component. You will
        see the debug labels for <code>count</code> and <code>text</code>.
      </div>
    </div>
  );
};

export default DebugExample;
