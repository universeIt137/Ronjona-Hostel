import React from 'react';
import Bannar from './leftSideComponents/bannar';
import PackageDetailsDescription from './leftSideComponents/PackageDetailsDescription';

const PackageDetailsLeftSide = () => {
    return (
        <div className=''>
            <Bannar/>
            <PackageDetailsDescription/>
        </div>
    );
};

export default PackageDetailsLeftSide;