import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = ({ darkMode }) => {
  return (
    <>
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
          </div>
          <div className="expand-icon">
            <i className="material-icons">expand_more</i>
          </div>
        </div>
        <section className="container aboutMeSection">
          <h2>About Me</h2>
        </section>
      </div>

      <style jsx>
        {`
          .home-page-main {
            margin-top: 55px;
          }

          // ***** Hero Section *****

          .home-page-hero {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: calc((6.7px * 100) - 55px);
          }

          .container {
            padding: 0 1.4em;
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
          }

          .hero-text {
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

          .expand-icon {
            position: absolute;
            bottom: 20px;
          }

          .expand-icon i {
            color: var(--accent-color);
            font-size: 40px;
          }

          // ***** About Section *****

          section.aboutMeSection {
            padding-top: 1.8em;
            padding-bottom: 1.8em;
          }

          section.aboutMeSection h2 {
            color: var(--font-color);
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
              height: calc((12.5px * 100) - 55px);
            }
          }

          @media (max-width: 768px) {
            .home-page-hero {
              height: calc((9px * 100) - 55px);
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

          @media (max-width: 576px) {
            .home-page-hero {
              height: calc((7px * 100) - 55px);
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

          @media (max-width: 375px) {
            .home-page-hero {
              height: calc((7px * 100) - 55px);
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
