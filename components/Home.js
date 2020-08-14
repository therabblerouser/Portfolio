import React from 'react';

import Hero from './homeComponents/Hero';
import About from './homeComponents/About';
import ProjectList from './homeComponents/ProjectList';

import axios from 'axios';
import useSWR from 'swr';

const Home = () => {
  const fetcher = async (url) => {
    let res = await axios.get(url);
    let { data } = res.data;
    return data;
  };

  const { data, error } = useSWR(
    `${process.env.API_BASE_URL}/api/projects`,
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
