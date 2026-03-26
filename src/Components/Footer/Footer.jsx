import React from 'react';
import { FaFacebook, FaLinkedin, FaX } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-blue-950 text-white p-4 lg:p-8'>
      <div className='flex justify-between pb-4'>
        <a href="/" className="flex items-center text-xl font-bold text-white">
          <span>
            <img className="w-6 lg:w-10" src="/logo.png" alt="" />
          </span>
          APP.CHAI
        </a>
        <div className='space-y-3'>
          <h3 className='text-xl font-semibold'>Social Links</h3>
          <div className='flex items-center space-x-2'>
            <FaX/>
            <FaLinkedin/>
            <FaFacebook/>
          </div>
        </div>
      </div>

      <hr className='text-gray-400' />
      <div className='pt-4 text-center'>
        <p >Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;