import "./ModalPopup.scss";

const ModalPopup = ({ open, onClose, children, width = "600px" }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: width }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default ModalPopup;
