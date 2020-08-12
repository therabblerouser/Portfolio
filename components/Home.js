import React from 'react';

import axios from 'axios';
import useSWR from 'swr';

import Hero from './homeSections/Hero';
import About from './homeSections/About';
import ProjectList from './homeSections/ProjectList';

const Home = () => {
  return (
    <>
      <div className="home-page-main">
        <Hero />
        <ProjectList />
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
