import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import StatusCount from '../../Components/StatusCount/StatusCount';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';

const appsPromise = fetch('data.json').then(res=>res.json());

const Home = () => {
  return (
    <div>
      <Banner/>
      <StatusCount/>
      <Suspense fallback={<h3>loading...</h3>}>
        <TrendingApps appsPromise={appsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;