import React from 'react';
import { useLocation } from 'react-router-dom';
import usePhotos from '../../../hooks/usePhotos';
import CustomLink from '../../Shared/CustomLink';
import './StreetPhotography.css';

const StreetPhotography = ({ photoInfo }) => {
  const location = useLocation();
  let showItems;
  location.pathname === '/' ? (showItems = 3) : (showItems = 2);
  const [photos] = usePhotos();
  return (
    <div className='background-color pb-5'>
      <div className='section mx-auto'>
        <h2 className='section-title'>
          S t r e e t &nbsp; P h o t o g r a p h y
        </h2>
        <div className={`row row-cols-lg-${showItems} row-cols-1`}>
          {photos.map((photo, index) => (
            <div
              className={`col section-card ${
                showItems === 3 && index >= 3 && 'd-none'
              }`}
              key={photo.id}
            >
              <img className='w-100' src={photo.img} alt='' />
              <h3 className='section-card-title pt-3'>{photo.title}</h3>
              <p className='section-card-details'>{photo.details}</p>
              <button
                className='section-card-read-more-button hover-effect'
                onClick={() => photoInfo(photo.id)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
        {showItems === 3 && (
          <CustomLink to='streetPhotography'>
            <span className='fst-italic text-warning'>
              More Street Photography {'>'}
            </span>
          </CustomLink>
        )}
      </div>
    </div>
  );
};

export default StreetPhotography;
