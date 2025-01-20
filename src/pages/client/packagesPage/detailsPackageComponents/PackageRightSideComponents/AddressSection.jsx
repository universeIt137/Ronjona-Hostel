import React from 'react';

const AddressSection = ({packagesDetailsData }) => {
  return (
    <div className='  justify-items-center mt-10'>
      <div className='bg-gray-200 shadow-lg p-3 w-[450px] rounded-[30px] px-4'>
        
        {/* List with dots */}
        {/* <p className=" text-4xl font-bold">Other Information</p>
        <ul className="p-4">
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
        </ul> */}

        {/* Google Map Embed */}
        <iframe 
          title='Google Map'
          allowFullScreen="" 
          loading="lazy"
          className='w-[420px] rounded-[30px]  h-96 my-8' 
          src={packagesDetailsData?.locationLink}
          alt="" 
        />
      </div>

      {/* Inline Styles for Dot Item */}
      <style jsx>{`
        .dot-item {
          position: relative;
          padding-left: 20px; /* Space for the dot */
        }

        .dot-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px; /* Size of the dot */
          height: 8px;
          border-radius: 50%;
          background-color: black; /* Dot color (you can change this) */
        }
      `}</style>
    </div>
  );
};

export default AddressSection;
