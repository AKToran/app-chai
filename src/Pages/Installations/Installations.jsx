import React, { useState } from "react";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../Utilities/localStorage";
import { useLoaderData } from "react-router";
import { FaDownload, FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

const Installations = () => {
  const allApps = useLoaderData();
  const [apps, setApps] = useState(() => {
    const installedAppsId = getFromLocalStorage();
    return allApps.filter((app) => installedAppsId.includes(app.id));
  });

  const handleUninstall = (id) => {
    toast.warn("App uninstalled!")
    const remainingApps = apps.filter((app) => app.id != id);
    setApps(remainingApps);
    removeFromLocalStorage(id);
  };

  const handleSelect = (e) =>{
    const select = e.target.value;
    if(select === "high"){
      const sorted = [...apps].sort((a,b) => b.size - a.size);
      setApps(sorted);
    }
    if(select === "low"){
      const sorted = [...apps].sort((a,b) => a.size - b.size);
      setApps(sorted);
    }

  }

  return (
    <div className="p-4 lg:p-20 lg:pt-12 bg-slate-100">
      <div className="text-center space-y-4 mb-6">
        <h1 className="text-2xl lg:text-4xl font-semibold">
          Your Installed Apps
        </h1>
        <p>All the Apps that you have Installed.</p>
      </div>

      <div className="flex justify-between">
        <h3 className="text-lg font-bold">{apps.length} Apps Found</h3>
        <select onChange={handleSelect} defaultValue="Sort By Size" className="select">
          <option disabled={true}>Sort By Size</option>
          <option value="high">High-Low</option>
          <option value="low">Low-High</option>
        </select>
      </div>

      <div className="">
        {apps.map((app) => {
          return (
            <div
              key={app.id}
              className="flex my-4 p-4 bg-white rounded-xl gap-4 justify-between items-center"
            >
              <div className="flex gap-4">
                <div className="w-18 rounded-xl">
                  <img className="rounded-xl" src={app.image} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-xl font-bold">{app.title}</h4>
                  <div className="flex items-center gap-2 lg:gap-4">
                    <p className="flex gap-1 items-center text-green-600 bg-green-300/60 p-0.5 rounded-md">
                      <span className="text-sm">
                        <FaDownload />
                      </span>
                      {app.downloads}
                    </p>
                    <p className="flex gap-1 items-center text-amber-600 bg-amber-200/60 p-0.5 rounded-md">
                      <span className="text-sm">
                        <FaStar />
                      </span>
                      {app.ratingAvg}
                    </p>
                    <p className="font-semibold">{app.size}MB</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  handleUninstall(`${app.id}`);
                }}
                className="btn btn-primary"
              >
                Uninstall
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Installations;
