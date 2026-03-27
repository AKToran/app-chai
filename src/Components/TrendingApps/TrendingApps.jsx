import React, { use } from "react";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const TrendingApps = ({ appsPromise }) => {
  const allApps = use(appsPromise);
  const sortedApps = [...allApps.sort((a, b) => b.ratingAvg - a.ratingAvg)];
  const topApps = sortedApps.slice(0, 8);

  return (
    <div className="bg-slate-50 p-4 lg:p-20">
      <div className="text-center space-y-4 mb-6">
        <h1 className="text-2xl lg:text-4xl font-semibold">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by Us</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {topApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to={'/apps'} className="btn btn-lg bg-blue-800 text-white">Show All</Link>
      </div>
    </div>
  );
};

export default TrendingApps;
