import React from 'react';
import errorIcon from "../../assets/error-404.png"

const ErrorPage = () => {
  return (
    <div className='p-4 lg:p-20 bg-slate-100 flex flex-col items-center gap-2'>
      <img className='w-2/3 lg:w-1/4' src={errorIcon} alt="404 page not found" />
      <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
      <p>The page you are looking for is not available.</p>
      <a className='btn bg-blue-700 text-white' href="/">Go Back</a>
    </div>
  );
};

export default ErrorPage;