import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

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

        :root {
          --bg-color: ${!darkMode ? '#fff' : '#202020'};
          --font-color: ${!darkMode ? '#202020' : '#fff'};
          --accent-color: #82adc9;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

Index.getIntial;

export default Index;

// body.dark {
//   --bg-color: #202020;
//   --font-color-body: #fff;
//   --tag-bg: #131313;
//   --tag-color: #f2f2f2;
//   --contact-bg: #1c1c1c;
//   --contact-color: #fff;
//   --form-bg: #131313;
//   --form-button-bg: #0e0e0e;
//   --form-button-color: var(--font-color-accent);
//   --hr-bg: #fff;
//   --blockquote-color: hsla(0,0%,100%,0.8);
// }
