import React from 'react';

const ChooseUs = () => {
    return (
        <div className="px-4">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-24">
                <div className="lg:w-1/2">
                    <h1 className="text-xl lg:text-2xl font-bold ml-4 lg:ml-10 mb-4">Why Choose Us</h1>
                    <div className="relative">
                        <img
                            className="w-[600px] h-[700px]"
                            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736069505/ronjona/uacpdp2e2gz8plklnfza.png"
                            alt="Main Image"
                        />
                        <img
                            className="hidden lg:block -mt-[420px] ml-[250px] w-[300px] lg:w-[500px] h-[300px]"
                            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736069505/ronjona/fpwq9ibdlm6jnw6qi9kt.png"
                            alt="Overlay Image"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-6 lg:mt-48 mr-0 lg:mr-8">
                    <p className="text-xl lg:text-6xl font-semibold mb-4">WHY YOU WITH RONJONA</p>
                    <p className="text-sm lg:text-lg text-justify">
                        Ronjona women’s Hostel in Uttara is a premier venture for a comfortable stay for both girl
                        residents studying in various institutions who prefer staying away from the college hostel
                        and professionals working women who need accommodation in Dhaka (nearer to Uttara),
                        combining ideal locations near popular colleges and universities with modern facilities and
                        support to ensure maximum comfort and convenience during their stay.
                        <br />
                        <br />
                        Our elegantly designed rooms and furnished homes offer you a choice of two beds, three beds
                        in rooms, or four beds in house accommodations featuring spacious living and dining areas,
                        a browsing center, and pick-up & drop-off facilities for a few colleges and universities.
                        All are assured with a personal level of service that you won’t find anywhere else. When you
                        stay at Ronjona women’s Hostel in Uttara, we’re confident that you will have a comfortable
                        and enjoyable stay and, most importantly, be surprised at the great value that we offer.
                        This facility comes with assurance for discipline, security, and excellence in all amenities
                        & care. In our cozy guest house, you can truly feel at home: enjoy the comfort of cooking
                        your own meals in our spacious and colorful kitchen. Our expertise in the hospitality
                        industry spans half a decade. Our mature process and system in place assure you of our best
                        services at all times.
                        <br />
                        <br />
                        Our goal is to make our inmates feel that they truly are at a home away from home.
                        <br />
                        <br />
                        Our mission is to be the No.1 hostel service provider in Dhaka City by providing clean,
                        comfortable, and affordable accommodation with superior customer service, ensuring
                        discipline, security, and excellence in all amenities & care. Our team is extremely
                        professional and willing to go above and beyond to provide the absolute best hostel
                        experience possible.
                    </p>
                </div>
            </div>
        </div>


    );
};

export default ChooseUs;