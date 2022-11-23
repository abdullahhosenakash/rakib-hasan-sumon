import React from 'react';
import { useLocation } from 'react-router-dom';
import usePhotos from '../../../hooks/usePhotos';
import CustomLink from '../../Shared/CustomLink';
import './NaturePhotography.css';

const NaturePhotography = ({ photoInfo }) => {
  const [photos] = usePhotos();
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div
      className={`background-color pb-5 ${pathname === '/' ? 'w-50' : 'w-100'}`}
    >
      <div className='section mx-auto'>
        <h2 className='section-title'>
          N a t u r e <span className='section-title-sm'></span> P h o t o g r a
          p h y
        </h2>
        <div
          className={`row row-cols-lg-${
            pathname === '/' ? '1' : '2'
          } row-cols-1`}
        >
          {photos.map((photo, index) => (
            <div
              className={`col section-card ${
                pathname === '/' && index >= 3 && 'd-none'
              }`}
              key={photo.id}
            >
              <img
                className={`${pathname === '/' ? 'w-50' : 'w-100'}`}
                src={photo.img}
                alt=''
              />
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
        {pathname === '/' && (
          <CustomLink to='naturePhotography'>
            <span className='fst-italic text-warning'>
              More Nature Photography {'>'}
            </span>
          </CustomLink>
        )}
      </div>
    </div>
  );
};

export default NaturePhotography;
