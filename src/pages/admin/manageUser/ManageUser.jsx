import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ManageUser = () => {

    const axiosPublic = useAxiosPublic();


    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllUsers', config);
            return res.data;
        }
    })

    console.log(users);

    return (
        <div>
            This is manage user.
        </div>
    );
};

export default ManageUser;