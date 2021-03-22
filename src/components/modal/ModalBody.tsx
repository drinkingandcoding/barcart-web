import React, { ReactNode } from "react";

import './Modal.scss'

interface ModalBodyProps {
  children: ReactNode,
  className?: string
}

const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
  return (
    <div className={`bc-modal-content-body ${className}`}>
      {children} 
    </div>
  )
}

export default ModalBody