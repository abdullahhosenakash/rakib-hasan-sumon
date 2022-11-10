import React from 'react';
import DocumentaryPhotography from '../Tabs/DocumentaryPhotography/DocumentaryPhotography';
import NaturePhotography from '../Tabs/NaturePhotography';
import StreetPhotography from '../Tabs/StreetPhotography/StreetPhotography';
import Banner from './Banner';
import './Home.css';

const Home = ({ photoInfo }) => {
    return (
        <div>
            <Banner />
            <StreetPhotography photoInfo={photoInfo} showItems={3} />
            <div className="background-color">
                <div className="background-color d-flex gap-3  mx-auto">
                    <DocumentaryPhotography photoInfo={photoInfo} showItems={1} />
                    <NaturePhotography />
                </div>
            </div>
        </div>
    );
};

export default Home;