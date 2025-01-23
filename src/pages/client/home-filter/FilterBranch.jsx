import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FilterBranch = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  window.scrollTo(0, 0);

  const { data: locationByBranchData = [], isLoading } = useQuery({
    queryKey: ['locationByBranchData', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/locationby-branch/${id}`);
      return res.data?.data;
    },
  });

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="lg:mt-28 lg:mb-12 mt-20 w-11/12 mx-auto">
      <Helmet>
        <title>Ronjona | Branch List</title>
      </Helmet>
      <h1 className="text-center font-bold lg:text-4xl">Our Branch</h1>
      <div className="overflow-hidden relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 px-1 py-10">
          {locationByBranchData.length > 0 ? (
            locationByBranchData.map((branch) => (
              <div key={branch._id} className="card h-80 bg-base-100 shadow-xl">
                <Link to={`/branch-by-packages/${branch._id}`}>
                  <figure className="px-5 pt-5">
                    <img
                      src={branch.img || 'https://via.placeholder.com/150'}
                      alt={branch.name}
                      className="rounded-xl w-full h-64 object-cover"
                    />
                  </figure>
                  <div className="my-2 items-center text-center">
                    <h2 className="card-title">{branch.name}</h2>
                    <p>{branch.branch || 'No description available'}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="h-screen ">
              <SkeletonLoader></SkeletonLoader>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBranch;
