import React from 'react';

const AddressSection = ({ packagesDetailsData }) => {
  return (
    <div>

      {/* List with dots */}
      {/* <p className=" text-4xl font-bold">Other Information</p>
        <ul className="p-4">
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
        </ul> */}

      {/* Google Map Embed */}
      {/* <iframe 
          title='Google Map'
          allowFullScreen="" 
          loading="lazy"
          className='w-[420px] rounded-[30px]  h-96 my-8' 
          src={packagesDetailsData?.locationLink}
          alt="" 
        /> */}

      {/* Inline Styles for Dot Item */}
    </div>

  );
};

export default AddressSection;
