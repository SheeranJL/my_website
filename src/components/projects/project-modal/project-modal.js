import React from 'react';
import './project-modal.scss';

const ProjectModal = ({setDisplayModal, data}) => {

  const closeModal = () => setDisplayModal(null);

  console.log(data)

  return (
    <div className='project-modal-inner-container'>
      <span className='close-button' onClick={() => closeModal()}>&#10006;</span>

      <div className='information-container'>

        <div className='title'>
          <span>{data.title}</span>
        </div>

        <div className='information'>

          <div className='project-images'>
            <img src={data.modalImage} />
          </div>

          <div className='project-description'>

            <span className='header-title'>Description</span>

            <div className='modal-blurb'>
              <span>{data.blurb}</span>
            </div>

            <span className='header-skills'>Stack</span>

            <div className='modal-skills'>

              {
                data.stack.map((Icon, index) => <Icon />)
              }

            </div>




          </div>

        </div>

      </div>
    </div>
  )
}

export default ProjectModal;
