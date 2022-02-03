import React from 'react';
import './project-modal.scss';

const ProjectModal = ({setDisplayModal, data}) => {

  const closeModal = () => setDisplayModal(null);

  console.log(data)

  return (
    <div className='project-modal-inner-container'>
      <span className='close-button' onClick={() => closeModal()}>&#10006;</span>

      <div className='title'>
        <span>{data.title}</span>
      </div>

    </div>
  )
}

export default ProjectModal;
