import React, { ReactNode } from "react";
import { Button } from '../button';
import { FiX } from "react-icons/fi";

import "./Modal.scss";

interface ModalProps {
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void,
  title: string
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, title }) => {
  const modal = document.getElementById('bc-modal');

  window.onclick = (ev: Event):void => {
    if (ev.target == modal) {
      onClose()
    }
  }

  return (
    <div id='bc-modal' className={`bc-modal bc-modal-${isOpen ? 'open' : 'closed'}`}>
      <div className='bc-modal-content'>
        <div className={`bc-modal-content-head`}>
          {title}
          <Button className='bc-modal-content-close' variant='icon' onClick={onClose}><FiX/></Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
