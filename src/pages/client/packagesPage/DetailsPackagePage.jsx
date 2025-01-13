import React from 'react';
import PackageDetailsLeftSide from './detailsPackageComponents/PackageDetailsLeftSide';
import PackageDetailsRightSide from './detailsPackageComponents/PackageDetailsRightSide';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const DetailsPackagePage = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0, 0);

    const {id} = useParams();

    const { data: packagesDetailsData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['packagesDetailsData',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getPackageById/${id}`);
            console.log(res.data)
            return res.data?.data;
        }
    });

    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 justify-items-center container mx-auto mt-24'>
            <PackageDetailsLeftSide packagesDetailsData = {packagesDetailsData}  />
            <PackageDetailsRightSide packagesDetailsData = {packagesDetailsData} />
        </div>
    );
};

export default DetailsPackagePage;