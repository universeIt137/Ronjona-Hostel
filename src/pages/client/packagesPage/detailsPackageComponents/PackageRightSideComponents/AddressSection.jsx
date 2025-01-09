import React from 'react';

const AddressSection = () => {
  return (
    <div className='  justify-items-center mt-10'>
      <div className='bg-yellow-50 shadow-lg p-6 w-[450px] rounded-[30px] px-4'>
        
        {/* List with dots */}
        <p className=" text-4xl font-bold">Other Information</p>
        <ul className="p-4">
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
          <li className="dot-item text-xl font-bold">Other Information</li>
        </ul>

        {/* Google Map Embed */}
        <iframe 
          title='Google Map'
          allowFullScreen="" 
          loading="lazy"
          className='w-[420px] rounded-[30px]  h-96 my-10' 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5351072979374!2d90.4302856747924!3d23.76395208825702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf537d1f2e09%3A0x8fe7a3faf331a140!2sUniverse%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1736328939744!5m2!1sen!2sbd"
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
