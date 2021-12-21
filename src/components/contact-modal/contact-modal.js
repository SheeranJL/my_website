import React from 'react';
import './contact-modal.scss';

const ContactModal = ({toggle}) => {

  console.log(toggle);

  return (
    <div className={toggle === true ? 'contact-modal-container' : ''}>
      test
    </div>
  )
}

export default ContactModal;
