import React from 'react';
import PriceSection from './PackageRightSideComponents/PriceSection';
import AddressSection from './PackageRightSideComponents/AddressSection';
import RelatedPackages from './PackageRightSideComponents/RelatedPackages';

const PackageDetailsRightSide = ({packagesDetailsData}) => {
    return (
        <div className=' '>
            
            <PriceSection packagesDetailsData = {packagesDetailsData} />
            <AddressSection packagesDetailsData = {packagesDetailsData} />
            <RelatedPackages />
        </div>
    );
};

export default PackageDetailsRightSide;