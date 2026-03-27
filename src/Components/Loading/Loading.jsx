import React from 'react';

const Loading = () => {
  return (
    <div className='w-full h-40 flex items-center justify-center bg-slate-100'>
      <span className="loading loading-infinity loading-xl"></span>
    </div>
  );
};

export default Loading;