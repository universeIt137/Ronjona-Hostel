import React from 'react';
import PriceSection from './PackageRightSideComponents/PriceSection';
import AddressSection from './PackageRightSideComponents/AddressSection';
import RelatedPackages from './PackageRightSideComponents/RelatedPackages';

const PackageDetailsRightSide = () => {
    return (
        <div className=' '>
            
            <PriceSection/>
            <AddressSection/>
            <RelatedPackages/>
        </div>
    );
};

export default PackageDetailsRightSide;