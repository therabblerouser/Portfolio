import React from 'react';

import Hero from './homeComponents/Hero';
import About from './homeComponents/About';
import ProjectList from './homeComponents/ProjectList';

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
