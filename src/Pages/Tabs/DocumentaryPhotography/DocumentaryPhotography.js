import React from 'react';
import usePhotos from '../../../hooks/usePhotos';
import CustomLink from '../../Shared/CustomLink';
import './DocumentaryPhotography.css';

const DocumentaryPhotography = ({ photoInfo, showItems }) => {
  console.log(showItems);
  const [photos] = usePhotos();
  return (
    <div className="background-color">
      <div className="documentary-section mx-auto pb-5">
        <h2 className="section-title">D o c u m e n t a r y &nbsp;  P h o t o g r a p h y</h2>
        <div className="d-flex flex-column gap-3 ">
          {photos.map((photo, index) => (
            <div className={`d-flex gap-4 ${showItems === 1 && (index <= 1 &&           'flex-column': 'd-none')}`} key={photo.id}>
              <img className="documentary-photo" src={photo.img} alt="" />
              <div className="documentary-photo-details">
                <h3 className="section-card-title pt-3">{photo.title}</h3>
                <p className="section-card-details">{photo.details}</p>
                <button type="button" className="section-card-read-more-button hover-effect" onClick={() => photoInfo(photo.id)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
        {showItems === 1 && (
          <CustomLink to="streetPhotography">
            <span className="fst-italic text-warning">
              More Street Photography &gt;
            </span>
          </CustomLink>
        )}
      </div>
    </div>
  );
};

export default DocumentaryPhotography;
