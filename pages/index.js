import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import axios from 'axios';
import useSWR from 'swr';

import Hero from '../components/homeSections/Hero';
import About from '../components/homeSections/About';
import ProjectList from '../components/homeSections/ProjectList';
import Footer from '../components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(getMode());

  const toggleMode = () => setDarkMode((prevMode) => !prevMode);

  function getMode() {
    if (typeof window !== 'undefined') {
      const saveMode = JSON.parse(localStorage.getItem('darkMode'));

      return saveMode || false;
    }
  }

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.scrollspy');
      M.ScrollSpy.init(elems, options);
    });
  }, []);

  const fetcher = async (url) => {
    let res = await axios.get(url);
    let { data } = res.data;
    return data;
  };

  const { data, error } = useSWR('http://localhost:3000/api/projects', fetcher);

  if (error) return;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Head>
        <title>Joe McCann</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;800&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>

      <main>
        <nav>
          <div className="container">
            <div className="navbar-alignment">
              <a href="/" className="title">
                joemccann.dev
              </a>
              <div className="section-navs">
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <button onClick={toggleMode}>
                  {/* {!darkMode ? <Brightness3 /> : <WbSunny />} */}
                  <i className="material-icons">
                    {!darkMode ? 'brightness_2' : 'brightness_high'}
                  </i>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="home-page-main">
          <Hero />
          <ProjectList id="projects" data={data} className="scrollspy" />
          <About id="about" className="scrollspy" />
        </div>
        <Footer />
      </main>

      <style jsx>{`
        main {
          height: 100vh;
        }

        //  ******* NAVBAR *******

        nav {
          background-color: var(--bg-color);
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);
          position: fixed;
          width: 100%;
          top: 0 !important;
          z-index: 1000;
        }
        .container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          padding: 0 1.4em;
        }

        .navbar-alignment {
          display: flex;
          height: 55px;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5em;
        }

        .section-navs {
          display: flex;
          align-items: center;
        }

        .title {
          color: var(--font-color);
          font-size: 20px;
          font-weight: 300;
        }

        a {
          background-color: transparent;
          color: var(--font-color);
          font-size: 14.4px;
          margin-left: 10px;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          margin-left: 6px;
        }

        button:focus {
          outline: none;
          box-shadow: none;
        }

        .material-icons {
          font-size: 1.3rem;
          color: var(--font-color);
        }

        //  ******* HOMEPAGE *******

        .home-page-main {
          margin-top: 55px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: var(--bg-color);
          line-height: 1.15;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          padding: 0 1.4em;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }

        :root {
          --bg-color: ${!darkMode ? '#fff' : '#202020'};
          --font-color: ${!darkMode ? '#202020' : '#fff'};
          --accent-color: #82adc9;
          --projects-title-color: ${!darkMode ? '#82adc9' : '#1c1c1c'};
          --projects-color: ${!darkMode ? '#82adc9' : '#1c1c1c'};
          --card-color: ${!darkMode ? '#fff' : '#1c1c1c'};
          --card-description-color: ${!darkMode ? '#1c1c1c' : '#fff'};
        }
      `}</style>
    </div>
  );
};

export default Index;
