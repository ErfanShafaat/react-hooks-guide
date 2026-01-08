import {  useMemo, useState } from "react";
import type { FC } from "react";

const UseMemoExample: FC = () => {
  const [count, setCount] = useState<number>(1);
  const [darkMode, setDarkMode] = useState<boolean>(false);


  const expensiveResult = useMemo<number>(() => {
    console.log("Heavy calculation running...");
    let total = 0;

    for (let i = 0; i <= count * 1_000_000; i++) {
      total += i;
    }

    return total;
  }, [count]);

  return (
    <div
      className={`container mt-5 p-4 rounded shadow-sm ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ maxWidth: "600px" }}
    >
      <h3 className="mb-4 text-center">useMemo Example</h3>

      <div className="mb-3">
        <strong>Count:</strong> {count}
      </div>

      <div className="mb-4">
        <strong>Result:</strong>
        <div className="alert alert-primary mt-2 mb-0">
          {expensiveResult}
        </div>
      </div>

      <div className="d-flex gap-2">
        <button
          className="btn btn-success flex-fill"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increase Count
        </button>

        <button
          className={`btn flex-fill ${
            darkMode ? "btn-outline-light" : "btn-outline-dark"
          }`}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default UseMemoExample;
