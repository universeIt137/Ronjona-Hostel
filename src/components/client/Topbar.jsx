import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Topbar = () => {
    return (
        <div>
            <div className="flex gap-4 p-1 bg-black text-white justify-center">
                <p className='text-xs md:text-lg'>10000+ students have experienced the Luxurious Hive Life. See what makes us stand out </p>
                <FaAngleRight className='text-center m-o md:m-2'></FaAngleRight>
            </div>
        </div>
    );
};

export default Topbar;