import React from 'react';
import PackageDetailsDescription from './leftSideComponents/PackageDetailsDescription';
import Banner2 from './leftSideComponents/Banner2';

const PackageDetailsLeftSide = ({packagesDetailsData}) => {
    return (
        <div className=''>
            <Banner2 packagesDetailsData = {packagesDetailsData} />
            <PackageDetailsDescription/>
        </div>
    );
};

export default PackageDetailsLeftSide;