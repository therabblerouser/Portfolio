import React from 'react';

import Hero from './homeSections/Hero';
import About from './homeSections/About';
import ProjectList from './homeSections/ProjectList';

import axios from 'axios';
import useSWR from 'swr';

const Home = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `${process.env.API_BASE_URL}/api/projects`,
    fetcher
  );

  console.log(data);

  if (error) return <div>faild to load</div>;
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
