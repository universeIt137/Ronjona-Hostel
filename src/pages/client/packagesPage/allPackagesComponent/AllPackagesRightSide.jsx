import React, { useState } from 'react';
import Packages from '../../homePage/homeComponents/Packages';

const AllPackagesRightSide = () => {
    const [activeButton, setActiveButton] = useState('All Packages'); // Default active button

    const buttons = [
        { label: 'All Packages', id: 'all-packages' },
        { label: 'Populated', id: 'populated' },
        { label: 'Medium Range', id: 'medium-range' },
        { label: 'High Range', id: 'high-range' }
    ];

//     return (
//         <div className='bg-white w-full h-96'>
//             {/* Top section start */}
//             <div className='justify-items-center m-10 font-bold'>
//                 <p className='text-7xl text-main-color'>Our All Packages</p>
//                 <p className='mt-4 text-xl'>
//                     Choose your preferred package now and book it within the specified time frame.
//                 </p>
//                 <div className='flex gap-8 mt-4'>
//                     {buttons.map((button) => (
//                         <button
//                             key={button.id}
//                             onClick={() => setActiveButton(button.label)}
//                             className={`px-4 py-2 rounded-t-lg ${
//                                 activeButton === button.label
//                                     ? 'bg-main-color text-white' // Active button styles
//                                     : 'bg-gray-200 text-black'   // Inactive button styles
//                             }`}
//                         >
//                             {button.label}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//             {/* Top section end */}
//             {/* Card Section start */}
//             <div className='mx-20'>
//                 <Packages/>
//             </div>
//         </div>
//     );
// };

// export default AllPackagesRightSide;



    return (
        <div className='bg-slate-100  w-full h-'>
            {/* Top section start */}
            <div className='justify-items-center m-10 font-bold'>
                <p className='text-7xl text-main-color'>Our All Packages</p>
                <p className='mt-4 text-xl'>
                    Choose your preferred package now and book it within the specified time frame.
                </p>
                <div className='flex gap-8 mt-4'>
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => setActiveButton(button.label)}
                            className={`px-4 py-2 rounded-t-lg  ${
                                activeButton === button.label
                                    ? 'bg-main-color text-white' // Active button styles
                                    : 'bg-gray-200 text-black'   // Inactive button styles
                            }`}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
            {/* Top section end */}
            {/* Card Section start */}
            <div className='mx-20'>
                <Packages/>
            </div>
        </div>
    );
};

export default AllPackagesRightSide;
