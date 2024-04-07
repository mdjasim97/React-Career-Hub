import React from 'react';
import HomeBanner from '../Banner/HomeBanner';
import Catagories from '../Catagories/Catagories';
import FeaturesJob from '../FeaturesJob/FeaturesJob';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Catagories></Catagories>
            <FeaturesJob></FeaturesJob>
        </div>
    );
};

export default Home;