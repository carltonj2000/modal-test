function Modal({
  show,
  onClose,
  children,
  width = 400,
  height = 300,
  centered = false,
}) {
  if (!show) return null;

  const onOutsideClick = (e) => {
    if (e.target.className === "modalBg") onClose();
  };
  return (
    <div className="modalBg" onClick={onOutsideClick}>
      <div className="modal">
        <div style={{ width: `${width}px`, height: `${height}px` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
