import Banner from './homeComponents/Banner';
import ChooseUs from './homeComponents/ChooseUs';
import Location from './homeComponents/Location';
import Packages from './homeComponents/Packages';
import Offers from './homeComponents/Offers';
import Facility from './homeComponents/Facility';
import Review from './homeComponents/Review';
import PhotoGallery from './homeComponents/PhotoGallery';
import VideoGallery from './homeComponents/VideoGallery';
import { Helmet } from 'react-helmet-async';
import KeyFeatures from '../key features/KeyFeatures';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Ronjona | Home Page</title>
            </Helmet>
            <Banner  />
            <Location/>
            <Packages />
            <Offers></Offers>
            {/* <Facility/> */}
            <KeyFeatures />
            <ChooseUs />
            <Review />
            <PhotoGallery/>
            <VideoGallery/>
            
        </div>
    );
};

export default HomePage;