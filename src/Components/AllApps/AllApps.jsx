import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";

const AllApps = () => {
  const [searchInput, setSearchInput] = useState("");
  const allApps = useLoaderData();

  const handleSearch = (e) =>{
    const query = e.target.value;
    setSearchInput(query);
  }

  const searchResult = allApps.filter(app=> app.title.toLowerCase().includes(searchInput.toLocaleLowerCase()));

  return (
    <div className="p-4 lg:p-20 lg:pt-12 bg-slate-100">
      <div>
        <div className="text-center space-y-4 mb-6">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            All Our Applications
          </h1>
          <p>
            Explore All Apps on the Market developed by Us. We code for
            millions.
          </p>
        </div>
        <div className="flex justify-between py-4">
          <p className="font-semibold text-xl">{ searchInput=== 0?  allApps.length : searchResult.length} Apps Found.</p>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input onChange={handleSearch} type="search" required placeholder="Search Apps" />
            </label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {
          (searchInput === "")? allApps.map((app) => (
          <AppCard key={app.id} app={app} />
        )) : searchResult.length===0? <h2 className="text-center lg:col-span-4 text-2xl">No apps Found!</h2> : searchResult.map((app) => (
          <AppCard key={app.id} app={app} />
        ))
        }
      </div>
    </div>
  );
};

export default AllApps;
