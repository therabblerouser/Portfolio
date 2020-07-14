import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(getMode());

  const toggleMode = () => setDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  function getMode() {
    if (typeof window !== 'undefined') {
      const saveMode = JSON.parse(localStorage.getItem('darkMode'));

      return saveMode || false;
    }
  }

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
        <Navbar darkMode={darkMode} toggleMode={toggleMode} />
        <Home darkMode={darkMode} />
        <Footer />
      </main>

      <style jsx>{`
        main {
          height: 100vh;
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
