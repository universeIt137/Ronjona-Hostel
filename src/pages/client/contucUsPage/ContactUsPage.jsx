import React from 'react';
import ContactBanner from './contactUsComponents/ContactBanner';



const ContactUsPage = () => {
    return (
        <div className=''>
            <ContactBanner />

            <div className="flex justify-between w-10/11 gap-x-40">
                <p className="text-sm mt-20 ml-4 font-extrabold md:font-normal md:text-2xl  md:mt-0 md:w-full">
                    Want to make your business better? Contact us today!
                </p>
                <p className="text-sm mt-20 ml-4  md:text-2xl  md:mt-0 md:w-full">
                    Our team is ready to assist you and address any queries you may have. We eagerly await your communication.
                </p>
            </div>

            <div className="w-full">
                <img
                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736165350/ronjona/e8fin8qdzlzt8ibp3zcq.png"
                    alt="Responsive Example"
                    className="w-full h-auto"
                />
            </div>
            <div>
                <p className='text-lg ml-10 md:ml-20 md:text-4xl bg-gradient-to-r from-indigo-800 to-sky-500 w-52 md:w-96  text-center text-white rounded-xl'>Gate In Touch With Us</p>
            </div>
            <div>
                <p className='text-xl font-medium md:text-8xl text-center'>How We Can Assist You?</p>
            </div>
            <form action="">
                <div className='flex grid grid-cols-2 '>
                    <div className='mt-2 ml-[10%] md:mt-10 md:ml-[15%]'>
                        <p className='md:ml-4 text-lg md:text-3xl'>Enter Your Name</p>
                        <input type='textarea' id='coupon_code' className='mt-1 text-lg md:w-full md:text-2xl md:mt-2 md:px-4 md:py-2' placeholder='Please enter your full name' />
                    </div>
                    <div className='mt-2 ml-[10%] md:mt-10 md:ml-[15%]'>
                        <p className='md:ml-4 text-lg md:text-3xl'>Email Address</p>
                        <input type='textarea' id='email' className='mt-1 text-lg md:w-full md:text-2xl md:mt-2 md:px-4 md:py-2' placeholder='Enter your  email address' />
                    </div>
                    <div className='mt-2 ml-[10%] md:mt-10 md:ml-[15%]'>
                        <p className='md:ml-4 text-lg md:text-3xl'>Phone Number</p>
                        <input type='textarea' id='phone_number' className='mt-1 text-lg md:w-full md:text-2xl md:mt-2 md:px-4 md:py-2' placeholder='Enter your phone number' />
                    </div>
                    <div className='mt-2 ml-[10%] md:mt-10 md:ml-[15%]'>
                        <p className='md:ml-4 text-lg md:text-3xl'>Subject</p>
                        <input type='textarea' id='coupon_code' className='mt-1 text-lg md:w-full md:text-2xl md:mt-2 md:px-4 md:py-2' placeholder='Add subject here' />
                    </div>
                    <div className='mt-2 ml-[10%] md:mt-10 md:ml-[15%]'>
                        <p className='md:ml-4 text-lg md:text-3xl'>Your Message</p>
                        <input type='textarea' id='coupon_code' className='mt-1 text-lg md:w-full md:text-2xl md:mt-2 md:px-4 md:py-2' placeholder='Describe your message here' />
                    </div>
                </div>
                <button className='text-3xl border border-black px-8'>Send</button>





            </form >





        </div >
    );
};

export default ContactUsPage;