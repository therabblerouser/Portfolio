import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

const Index = () => (
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
      <Navbar />
      <Home />
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
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #202020;
        line-height: 1.15;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Index;
