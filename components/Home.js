import React from 'react';

import axios from 'axios';
import useSWR from 'swr';

import Hero from './homeSections/Hero';
import About from './homeSections/About';
import ProjectList from './homeSections/ProjectList';

const Home = () => {
  const fetcher = async (url) => {
    let res = await axios.get(url);
    let { data } = res.data;
    return data;
  };

  const { data, error } = useSWR(
    'https://portfolio-sigma-sooty.vercel.app/api/projects',
    fetcher
  );

  if (error) return;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div className="home-page-main">
        <Hero />
        <ProjectList data={data} />
        <About />
      </div>

      <style jsx>
        {`
          .home-page-main {
            margin-top: 55px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
