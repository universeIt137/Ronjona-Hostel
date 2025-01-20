import React from 'react';
import AllPackagesLeftSide from './allPackagesComponent/AllPackagesLeftSide';
import AllPackagesRightSide from './allPackagesComponent/AllPackagesRightSide';
import { Helmet } from 'react-helmet-async';

const AllPackages = () => {
    return (
        <div className='  flex justify-items-center container mx-auto mt-24'>
            <Helmet>
                <title>
                    Ronjona | All Packages Page
                </title>
            </Helmet>
            {/* <AllPackagesLeftSide/> */}
            <AllPackagesRightSide/>
        </div>
    );
};

export default AllPackages;