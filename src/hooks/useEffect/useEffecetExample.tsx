import React, { useEffect, useState } from "react";

/**
 * UseEffectBestPractices
 * ----------------------
 * Demonstrates professional and real-world usage patterns
 * of the `useEffect` hook using React + TypeScript + Bootstrap.
 */

const UseEffectBestPractices: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  /**
   * EFFECT #1
   * Runs once on component mount.
   */
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  /**
   * EFFECT #2
   * Runs whenever `count` changes.
   */
  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      console.log("Cleanup before next count update");
    };
  }, [count]);

  /**
   * EFFECT #3
   * Handles window resize events safely.
   */
  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">
                useEffect Best Practices
              </h1>

              {/* Counter Section */}
              <div className="mb-4">
                <h5 className="fw-semibold">Counter</h5>
                <p className="fs-5 mb-2">Current count: {count}</p>

                <button
                  className="btn btn-primary"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  Increment
                </button>
              </div>

              <hr />

              {/* Window Width Section */}
              <div>
                <h5 className="fw-semibold">Window Width</h5>
                <p className="fs-5 mb-0">{windowWidth}px</p>
                <small className="text-muted">
                  Resize the browser window to see updates
                </small>
              </div>
            </div>
          </div>

          <p className="text-center text-muted mt-3 small">
            React • TypeScript • useEffect • Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseEffectBestPractices;
