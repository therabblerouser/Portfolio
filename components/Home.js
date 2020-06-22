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
                    color="#82ADC9"
                    items={['react', 'next', 'node']}
                  />
                </span>
                .js developer
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
            margin-top: 16rem;
            height: calc((2px * 100) - 55px);
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
            font-size: 80px;
            font-weight: 600;
            margin: 0;
            color: #fff;
          }

          .sliding-text p {
            font-size: 33px;
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

          @media (max-width: 1024px) {
            .home-page-hero {
              margin-top: 23rem;
            }
          }

          @media (max-width: 768px) {
            .home-page-hero {
              margin-top: 21rem;
            }

            .hero-text {
              padding-left: 3rem;
              padding-right: 3rem;
            }

            .hero-text h1 {
              font-size: 60px;
            }

            .sliding-text p {
              font-size: 28px;
            }
          }

          @media (max-width: 576px) {
            .home-page-hero {
              margin-top: 20rem;
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
              font-size: 15.5px;
              font-weight: 300;
              margin: 0 0 4px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
