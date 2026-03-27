import React from "react";
import { FaDownload, FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate(`/appDetails/${app.id}`)
  }
  return (
    <div onClick={handleClick} className="p-4 bg-white shadow-sm space-y-2 hover:cursor-pointer">
      <img className="rounded-sm" src={app.image} alt="app image" />
      <h3 className="font-semibold text-xl">{app.title}</h3>
      <div className="flex justify-between items-baseline">
        <p className="flex gap-1 items-center text-green-600 bg-green-300/60 p-1 rounded-md">
          <span className="text-sm">
            <FaDownload />
          </span>
          {app.downloads}
        </p>
        <p className="flex gap-1 items-center text-amber-600 bg-amber-200/60 p-1 rounded-md">
          <span className="text-sm">
            <FaStar />
          </span>
          {app.ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
