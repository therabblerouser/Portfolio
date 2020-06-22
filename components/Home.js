import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  return (
    <div className="home-page-main">
      <div className="home-page-hero">
        <div className="container">
          <div className="hero-text">
            <h1>Hi, I'm Joe</h1>
            <div className="sliding-text">
              <p>
                and i'm your new{' '}
                <span>
                  <ReactRotatingText
                    pause={3000}
                    items={['react', 'next', 'node']}
                  />
                </span>
                .js dev
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .home-page-main {
            margin-top: 55px;
          }

          .home-page-hero {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 390px;
          }

          .container {
            padding: 0 1.4em;
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
          }

          .hero-text {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .hero-text h1 {
            font-size: min(max(2.2rem, 6vw), 5rem);
            font-weight: 600;
            margin: 0;
            color: #fff;
          }

          .sliding-text p {
            font-size: min(max(0.9rem, 4vw), 2.3rem);
            font-family: 'Inconsolata', monospace;
            font-weight: 200;
            margin: 0;
            color: #fff;
          }

          .react-rotating-text-cursor {
            animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99)
              0s infinite;
          }

          @keyframes blinking-cursor {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @media (max-width: 576px) {
            .home-page-hero {
              height: 500px;
            }

            .hero-text {
              padding-left: 2rem;
              padding-right: 2rem;
            }
            .hero-text h1 {
              font-size: 40px;
              margin: 0;
            }

            .sliding-text p {
              font-size: 25px;
              margin: 0 0 4px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
