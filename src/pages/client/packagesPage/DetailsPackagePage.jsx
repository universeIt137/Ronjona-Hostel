import React from 'react';
import PackageDetailsLeftSide from './detailsPackageComponents/PackageDetailsLeftSide';
import PackageDetailsRightSide from './detailsPackageComponents/PackageDetailsRightSide';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

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

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader> </SkeletonLoader>
            </div>
        )
    }

    return (
        <div className='flex flex-col-reverse justify-between md:flex-row gap-4 justify-items-center w-11/12 mx-auto mt-24 lg:mt-24'>
            <Helmet>
                <title>Ronjona | Packages Details Page </title>
            </Helmet>
            <PackageDetailsLeftSide  packagesDetailsData = {packagesDetailsData} />
            <PackageDetailsRightSide packagesDetailsData = {packagesDetailsData} />
        </div>
    );
};

export default DetailsPackagePage;