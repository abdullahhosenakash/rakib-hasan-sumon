import React from 'react';
import DocumentaryPhotography from '../Tabs/DocumentaryPhotography/DocumentaryPhotography';
import NaturePhotography from '../Tabs/NaturePhotography/NaturePhotography';
import StreetPhotography from '../Tabs/StreetPhotography/StreetPhotography';
import Banner from './Banner';
import './Home.css';

const Home = ({ photoInfo }) => (
  <div>
    <Banner />
    <StreetPhotography photoInfo={photoInfo} />
    <div className='background-color'>
      <div className='d-flex gap-3 mx-auto'>
        <DocumentaryPhotography photoInfo={photoInfo} />
        <NaturePhotography />
      </div>
    </div>
  </div>
);
export default Home;
