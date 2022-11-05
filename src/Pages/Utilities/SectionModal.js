import React from 'react';
import { Modal } from 'react-bootstrap';
import usePhotos from '../../hooks/usePhotos';
import './Utilities.css';

const SectionModal = ({ show, setShow, id }) => {
    const [photos] = usePhotos();
    const selectedPhoto = photos.find(photo => photo.id === id) || {};

    return (
        <div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <img src={selectedPhoto?.img} alt="" />
                <Modal.Title id="example-custom-modal-styling-title" className='modal-title'>
                    {selectedPhoto.title}
                </Modal.Title>
                <Modal.Body className='modal-body'>
                    <span>
                        {selectedPhoto.details}
                    </span>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SectionModal;