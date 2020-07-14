import React from 'react';
import Hero from './homeSections/Hero';
import About from './homeSections/About';
import ProjectList from './homeSections/ProjectList';
import axios from 'axios';
import useSWR from 'swr';

const Home = () => {
  const fetcher = async (url) => {
    let res = await axios.get(url);
    let { data } = res.data;
    return data;
  };

  const { data, error } = useSWR('http://localhost:3000/api/projects', fetcher);

  if (error) return <div></div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div className="home-page-main">
        <Hero />
        <About />
        <ProjectList data={data} />
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
