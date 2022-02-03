import React from 'react';
import './project-modal.scss';

const ProjectModal = ({setDisplayModal}) => {

  const closeModal = () => setDisplayModal(null);


  return (
    <div className='project-modal-inner-container'>
      <span className='close-button' onClick={() => closeModal()}>&#10006;</span>
    </div>
  )
}

export default ProjectModal;
