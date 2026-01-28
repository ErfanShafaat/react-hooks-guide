import  {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
export type ModalHandle = {
  open: () => void;
  close: () => void;
};

const CustomModal = forwardRef<ModalHandle>((_, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setShow(true),
    close: () => setShow(false),
  }));

  if (!show) return null;

  return (
    <>
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Custom Modal</h5>
              <button
                className="btn-close"
                onClick={() => setShow(false)}
              />
            </div>

            <div className="modal-body">
              <p>
                Modal is fully controlled with
                <strong> useImperativeHandle</strong> 🚀
              </p>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop show" />
    </>
  );
});

export default CustomModal;