import React from 'react';
import { useLocation } from 'react-router-dom';
import usePhotos from '../../../hooks/usePhotos';
import CustomLink from '../../Shared/CustomLink';
import './DocumentaryPhotography.css';

const DocumentaryPhotography = ({ photoInfo }) => {
  const [photos] = usePhotos();
  const location = useLocation();
  let showItems;

  if (location.pathname === '/') {
    showItems = 1;
  }

  return (
    <div className='background-color w-50'>
      <div className='documentary-section mx-auto pb-5'>
        <h2 className='section-title'>
          D o c u m e n t a r y &nbsp; P h o t o g r a p h y
        </h2>
        <div className='d-flex flex-column gap-3 '>
          {photos.map((photo, index) => (
            <div
              className={`d-flex gap-${showItems === 1 ? '0' : '4'} 
              ${showItems === 1 && index == 0 && 'flex-column'}
              ${showItems === 1 && index >= 1 && 'd-none'} flex-column`}
              key={photo.id}
            >
              <img
                className={`${showItems === 1 && 'w-50 gap-'}`}
                src={photo.img}
                alt=''
              />
              <div className='documentary-photo-details'>
                <h3 className='section-card-title pt-3'>{photo.title}</h3>
                <p className='section-card-details'>{photo.details}</p>
                <button
                  type='button'
                  className='section-card-read-more-button hover-effect'
                  onClick={() => photoInfo(photo.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        {showItems === 1 && (
          <CustomLink to='streetPhotography'>
            <span className='fst-italic text-warning'>
              More Street Photography &gt;
            </span>
          </CustomLink>
        )}
      </div>
    </div>
  );
};

export default DocumentaryPhotography;
