import React from 'react';
import PackageDetailsDescription from './leftSideComponents/PackageDetailsDescription';
import Banner2 from './leftSideComponents/Banner2';

const PackageDetailsLeftSide = () => {
    return (
        <div className=''>
            <Banner2/>
            <PackageDetailsDescription/>
        </div>
    );
};

export default PackageDetailsLeftSide;