import React, { useRef } from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onDelete, onClose }) => {

  const modalRef = useRef();

  const onBackground = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  }

  const onDeleteApplicant = () => {
    onDelete().then(() => onClose())
  }
  
  return isOpen ? (
    <div className='modal__background' ref={modalRef} onClick={onBackground}>
      <div className='modal'>
        <p className='modal__message'>Are you sure you want to delete this applicant?</p>
        <div className='modal__button-group'>
          <button onClick={onDeleteApplicant} className='modal__button--delete'>Delete</button>
          <button onClick={onClose} className='modal__button--cancel'>Cancel</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
