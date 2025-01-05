import React from 'react';

const Packages = () => {
    return (
        <div>
            <p className="hover:underline text-2xl md:text-4xl mb-6 font-bold">Our Pakeges</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                <div>
                    <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/food/spices.jpg" alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Packages;