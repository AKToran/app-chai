import React, { useState } from "react";
import { FaDownload, FaStar, FaThumbsUp } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import errorIcon2 from '../../assets/App-Error.png';
import { setToLocalStorage } from "../../Utilities/localStorage";

const AppDetails = () => {
  const { id } = useParams();
  const allApps = useLoaderData();

  const app = allApps.find((app) => app.id == id);
  const data = app?.ratings.toReversed();

  const [isInstalled, setIsInstalled] = useState(false);



  if(!app){
    return(
      <div className='p-4 lg:p-20 bg-slate-100 flex flex-col items-center gap-2'>
            <img className='w-2/3 lg:w-1/4' src={errorIcon2} alt="404 page not found" />
            <h1 className='text-4xl font-bold'>OOPS, APP NOT FOUND!</h1>
            <p>The App you are requesting is not found on our system. Please try other apps.</p>
            <a className='btn bg-blue-700 text-white' href="/">Go Back</a>
          </div>
    )
  }

  const handleInstall = (id) =>{
    setToLocalStorage(id);
    setIsInstalled(true);
  }

  return (
    <div className="p-4 lg:p-20 bg-slate-100 ">
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <img src={app.image} alt="" />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">{app.title}</h2>
            <p>Developed by: {app.companyName}</p>
          </div>
          <hr className="my-4" />
          <div className="flex gap-4">
            <div className="space-y-1">
              <FaDownload className="text-2xl text-green-500" />
              <p>Downloads</p>
              <h3 className="text-3xl font-bold">{app.downloads}</h3>
            </div>
            <div className="space-y-1">
              <FaStar className="text-2xl text-amber-400" />
              <p>Average Ratings</p>
              <h3 className="text-3xl font-bold">{app.ratingAvg}</h3>
            </div>
            <div className="space-y-1">
              <FaThumbsUp className="text-2xl text-purple-500" />
              <p>Total Reviews</p>
              <h3 className="text-3xl font-bold">{app.reviews}</h3>
            </div>
          </div>
          {isInstalled === false? <button onClick={()=>handleInstall(app.id)} className="btn btn-primary w-fit">
          Install Now ({app.size})
          </button>:<button disabled className="btn btn-primary w-fit">
          Installed ({app.size})
          </button>}
          
        </div>
      </div>
      <hr className="my-8" />

      <div>
        <h2 className="text-2xl font-semibold">Ratings</h2>
        <BarChart
          style={{
            width: "100%",
            maxWidth: "100vw",
            maxHeight: "100vh",
            aspectRatio: 4,
          }}
          responsive
          layout="vertical"
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis axisLine={false} tickLine={false} type="number" dataKey="count"/>
          <YAxis axisLine={false} tickLine={false} type="category" dataKey="name" />
          <Tooltip/>
          <Bar
            dataKey="count"
            fill="#FF8811"
            barSize={30}
          />
        </BarChart>
      </div>

      <hr className="my-8" />
      
      <div>
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p>{app.description}</p>
      </div>
      
    </div>
  );
};

export default AppDetails;
