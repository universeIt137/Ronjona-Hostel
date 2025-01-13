import React from 'react';
import AllPackagesLeftSide from './allPackagesComponent/AllPackagesLeftSide';
import AllPackagesRightSide from './allPackagesComponent/AllPackagesRightSide';

const AllPackages = () => {
    return (
        <div className='  flex justify-items-center container mx-auto mt-24'>
            {/* <AllPackagesLeftSide/> */}
            <AllPackagesRightSide/>
        </div>
    );
};

export default AllPackages;