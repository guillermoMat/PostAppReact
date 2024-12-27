import React from "react";
import { createPortal } from 'react-dom';
import "./styleModal.css"

// function Modal({ children }) {
//   return createPortal(
//     <div className="style-modal">
//       {children}
//     </div>,
//     document.getElementById("modal")
//   );
// }
function Modal({ children }) {
  return createPortal(
    <div className="style-modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}
export default Modal
