import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import LinkIcons from '../LinkIcons';

const Hero = () => (
  <>
    <div className="home-page-hero">
      <div className="container">
        <div className="hero-text">
          <h1>Hi, I'm Joe</h1>
          <div className="sliding-text">
            <p>
              and i'm a junior{' '}
              <span>
                <ReactRotatingText
                  typingInterval={140}
                  deletingInterval={140}
                  pause={2000}
                  color="#82ADC9"
                  items={['react', 'next', 'node']}
                />
              </span>
              .js developer
            </p>
          </div>
        </div>
        <div className="links">
          <LinkIcons />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .home-page-hero {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.75em;
          height: 92vh;
        }

        .hero-text {
          font-weight: 800;
          padding-left: 4rem;
        }

        .hero-text h1 {
          font-size: 80px;
          font-weight: 600;
          margin: 0;
          color: var(--font-color);
        }

        .sliding-text p {
          font-size: 33px;
          font-family: 'Inconsolata', monospace;
          font-weight: 200;
          margin: 0;
          color: var(--font-color);
        }

        .react-rotating-text-cursor {
          animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99)
            0s infinite;
        }

        .links {
          display: flex;
          justify-content: flex-end;
          margin-top: 2em;
          margin-right: 2em;
        }

        //  ***** Media Queries *****

        @media (max-width: 1024px) {
          .home-page-hero {
            height: 94vh;
            margin-bottom: 1.65em;
          }
        }

        @media (max-width: 768px) {
          .home-page-hero {
            height: calc((10px * 100) - 55px);
          }

          .hero-text {
            padding-left: 4rem;
          }

          .hero-text h1 {
            font-size: 60px;
          }

          .sliding-text p {
            font-size: 28px;
          }
        }

        @media (max-width: 375px) {
          .home-page-hero {
            height: calc((8px * 100) - 55px);
          }

          .hero-text {
            padding-left: 3rem;
          }

          .hero-text h1 {
            font-size: 40px;
          }

          .sliding-text p {
            font-size: 15.5px;
            font-weight: 300;
            margin: 0 0 4px;
          }
        }
      `}
    </style>
  </>
);
export default Hero;
