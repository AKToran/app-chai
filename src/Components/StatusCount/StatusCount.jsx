import React from "react";

const StatusCount = () => {
  return (
    <div className="text-center p-8 lg:p-12 bg-linear-to-r from-blue-950 to-purple-800 text-white">
      <h1 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
        Trusted by Millions, Built For You
      </h1>

      <div className="flex justify-between flex-col md:flex-row lg:w-2/3 mx-auto gap-4">
        <div className="status-card space-y-2">
          <p>Total Downloads</p>
          <h1 className="text-5xl font-semibold">23.4M</h1>
          <p>26% More Than Last Month</p>
        </div>
        <div className="status-card space-y-2">
          <p>Total Reviews</p>
          <h1 className="text-5xl font-semibold">904K</h1>
          <p>36% More Than Last Month</p>
        </div>
        <div className="status-card space-y-2">
          <p>Active Apps</p>
          <h1 className="text-5xl font-semibold"> 130+</h1>
          <p>45 More to Launch</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCount;
