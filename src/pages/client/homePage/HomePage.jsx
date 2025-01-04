import React from 'react';
import Banner from './homeComponents/Banner';
import ChooseUs from './homeComponents/ChooseUs';
import Location from './homeComponents/Location';
import Packages from './homeComponents/Packages';
import Offers from './homeComponents/Offers';
import Facility from './homeComponents/Facility';
import Review from './homeComponents/Review';
import Gallery from './homeComponents/Gallery';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Location/>
            <Packages />
            <Offers></Offers>
            <Facility/>
            <ChooseUs />
            <Review />
            <Gallery/>
        </div>
    );
};

export default HomePage;