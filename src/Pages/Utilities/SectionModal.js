import React from 'react';
import { Modal } from 'react-bootstrap';
import usePhotos from '../../hooks/usePhotos';
import './Utilities.css';

const SectionModal = ({ show, setShow, id }) => {
    const [photos] = usePhotos();
    const selectedPhoto = photos.find(photo => photo.id === id);

    return (
        <div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className='modal-header' closeButton>
                    {/* <Modal.Title id="example-custom-modal-styling-title">
                        {selectedPhoto.title}
                    </Modal.Title> */}
                </Modal.Header>
                <img src={selectedPhoto?.img} alt="" />
                <Modal.Body className='modal-body'>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SectionModal;