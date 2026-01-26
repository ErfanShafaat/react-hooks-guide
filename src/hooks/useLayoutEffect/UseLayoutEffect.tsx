import React, {
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * UseLayoutEffect vs UseEffect Example
 *
 * Demonstrates the difference between useLayoutEffect and useEffect
 * when measuring DOM size.
 */
const UseLayoutEffectExample: React.FC = () => {
  // --- useLayoutEffect refs & state ---
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const [layoutWidth, setLayoutWidth] = useState<number>(0);

  // --- useEffect refs & state ---
  const effectRef = useRef<HTMLDivElement | null>(null);
  const [effectWidth, setEffectWidth] = useState<number>(0);

  // useLayoutEffect (before paint)
  useLayoutEffect(() => {
    if (!layoutRef.current) return;

    const rect = layoutRef.current.getBoundingClientRect();
    setLayoutWidth(rect.width);
  }, []);

  // useEffect (after paint)
  useEffect(() => {
    if (!effectRef.current) return;

    const rect = effectRef.current.getBoundingClientRect();
    setEffectWidth(rect.width);
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {/* useLayoutEffect Section */}
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-info">
            <div className="card-body">
              <h5 className="card-title text-info mb-3">
                useLayoutEffect
              </h5>

              <div
                ref={layoutRef}
                className="p-4 rounded bg-info bg-opacity-10 border border-info text-center fw-medium"
              >
                Measured before paint using{" "}
                <strong>useLayoutEffect</strong>
              </div>

              <p className="mt-4 text-center fs-5">
                Width:{" "}
                <span className="badge bg-info text-dark fs-6">
                  {layoutWidth}px
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* useEffect Section */}
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-warning">
            <div className="card-body">
              <h5 className="card-title text-warning mb-3">
                useEffect
              </h5>

              <div
                ref={effectRef}
                className="p-4 rounded bg-warning bg-opacity-10 border border-warning text-center fw-medium"
              >
                Measured after paint using{" "}
                <strong>useEffect</strong>
              </div>

              <p className="mt-4 text-center fs-5">
                Width:{" "}
                <span className="badge bg-warning text-dark fs-6">
                  {effectWidth}px
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseLayoutEffectExample;
