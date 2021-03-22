import React, { ReactNode } from "react";

import './Modal.scss'

interface ModalFooterProps {
  children: ReactNode,
  className?: string
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
  return (
    <div className={`bc-modal-content-footer ${className}`}>
      {children}
    </div>
  )
}

export default ModalFooter;
