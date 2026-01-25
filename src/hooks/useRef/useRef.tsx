import { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3 text-center">
                useRef Focus Example
              </h5>

              <div className="input-group">
                <input
                  type="text"
                  ref={inputRef}
                  className="form-control"
                  placeholder="Type here..."
                />
                <button
                  className="btn btn-primary"
                  onClick={handleFocus}
                >
                  Focus
                </button>
              </div>

              <p className="text-muted mt-3 mb-0 text-center">
                Click the button to focus the input
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseRefExample;
