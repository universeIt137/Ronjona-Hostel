import React from 'react';

const ServiceOffer = () => {
    return (
        <div className='max-w-4xl mx-auto ' >
            <div>
                <div>
                    <h1 className='font-bold text-4xl italic ' >Services We Offer</h1>
                </div>
                <div className='grid items-center grid-cols-2  ' >
                    <div>
                        <h1 className=' leading-7 text-xl text-justify  ' >  ronjona women’s Hostel is a modern hostel for women. It is the only Hostel available in Uttara which provides “Quality Living” in a “Homely Atmosphere”. This hostel comes with lots of extra little “Luxuries” and finishing touches that make any break away from home a bit more “Special”.</h1>
                    </div>
                    <div>
                        <img className='w-72 h-60 float-end ' src="https://www.ronjonabd.co/wp-content/uploads/2021/06/MG_0068-683x1024.jpg" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceOffer;