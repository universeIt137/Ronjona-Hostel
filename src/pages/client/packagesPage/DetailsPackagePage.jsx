import React from 'react';
import PackageDetailsLeftSide from './detailsPackageComponents/PackageDetailsLeftSide';
import PackageDetailsRightSide from './detailsPackageComponents/PackageDetailsRightSide';

const DetailsPackagePage = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 justify-items-center container mx-auto mt-24'>
            <PackageDetailsLeftSide/>
            <PackageDetailsRightSide/>
        </div>
    );
};

export default DetailsPackagePage;