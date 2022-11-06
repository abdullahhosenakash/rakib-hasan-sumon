import React from 'react';
import StreetPhotography from '../Tabs/StreetPhotography';
import Banner from './Banner';
import './Home.css';

const Home = ({ photoInfo }) => {
    console.log(photoInfo)
    return (
        <div>
            <Banner />
            <StreetPhotography photoInfo={photoInfo} showItems={3} />
        </div>
    );
};

export default Home;