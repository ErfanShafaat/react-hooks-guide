import React, { useRef } from "react";
import CustomModal from "./Modal";
import type  { ModalHandle } from './Modal'


const UseImperativeHandleExample: React.FC = () => {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">useImperativeHandle Example</h2>

      <button
        className="btn btn-primary me-2"
        onClick={() => modalRef.current?.open()}
      >
        Open Modal
      </button>

      <button
        className="btn btn-danger"
        onClick={() => modalRef.current?.close()}
      >
        Close Modal
      </button>

      <CustomModal ref={modalRef} />
    </div>
  );
};

export default UseImperativeHandleExample;
