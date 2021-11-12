import { useEffect, useCallback } from "react";

import clsx from "clsx";

import { isEscapeKey } from "../utils/keys";

function Modal({
  show,
  onClose,
  children,
  width = 400,
  height = 300,
  centered = false,
  positionClassName = "",
  aria = {},
  role = "presentation",
}) {
  const onKeyPress = useCallback(
    (e) => {
      if (isEscapeKey(e)) onClose && onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress, false);
    return () => {
      document.removeEventListener("keydown", onKeyPress, false);
    };
  }, [onKeyPress]);

  if (!show) return null;

  const onOutsideClick = (e) => {
    if (e.target.className === "modalBg") onClose && onClose();
  };
  return (
    <div className="modalBg" onClick={onOutsideClick} {...aria} role={role}>
      <div
        className={clsx([
          "modal",
          { centered: centered },
          { [positionClassName]: !centered },
        ])}
      >
        <div style={{ width: `${width}px`, height: `${height}px` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
