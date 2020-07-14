import React, { useState } from 'react';
import ReactRotatingText from 'react-rotating-text';
import ProjectList from './ProjectList';

const Home = () => {
  const year = new Date().getFullYear().toString();

  const projects = [
    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'React | Next | Airtable',
      repository: 'https://github.com/therabblerouser',
    },

    {
      title: 'Minesweeper',
      description: 'This is classic game minesweeper built with React.',
      tools: 'React | Next | Firebase',
      repository: 'https://github.com/therabblerouser',
    },

    {
      title: 'Moneytracker',
      description: 'This is a budget tracker used to keep track or your money.',
      tools: 'React | Next | Firebase',
      repository: 'https://github.com/therabblerouser',
    },
  ];

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
        </div>

        <section className="about-me">
          <div className="container">
            {' '}
            <h2>About Me</h2>
            <div className="inner-about-me">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                ex aliquam tempore explicabo cum perferendis officia molestiae
                iure eos dolor dolorum numquam distinctio quae ab pariatur ad
                nostrum obcaecati a!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                ex aliquam tempore explicabo cum perferendis officia molestiae
                iure eos dolor dolorum numquam distinctio quae ab pariatur ad
                nostrum obcaecati a!
              </p>
            </div>
          </div>
        </section>
        <section className="project">
          <div className="container">
            <h2>Projects</h2>
            <div className="project-img-email">
              <ProjectList projects={projects} />
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-icons">
                <i className="material-icons">wb_cloudy</i>
                <i className="material-icons">wb_incandescent</i>
              </div>
              <p>Joe McCann {year}</p>
            </div>
          </div>
        </footer>
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
            margin-bottom: 0.75em;
            height: 92vh;
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

          // ***** About Section *****

          section.about-me {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1.5em;
            padding-bottom: 1.5em;
            color: #fff;
            background: var(--projects-color);
            height: 92vh;
          }

          section.about-me h2 {
            font-size: 2.5rem;
            margin-bottom: 0.5em;
          }

          .inner-about-me {
            padding: 1em 1.5em;
          }

          .inner-about-me p {
            font-size: 20px;
            line-height: 1.8;
          }

          // ***** project Section *****

          .project {
            color: var(--font-color);
            padding-top: 1.5em;
            padding-bottom: 1.5em;
          }

          section.project h2 {
            font-size: 2.5rem;
            margin-bottom: 1em;
          }

          section.project-img-email {
            display: flex;
            flex-direction: column;
            padding-bottom: 2rem;
            margin-top: 2em;
          }

          section.project-info {
            padding-top: 5rem;
            padding-left: 1rem;
          }

          // ***** Footer Section *****

          footer {
            background: var(--projects-color);
            height: 9vh;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1em;
          }

          .footer-icons {
            display: flex;
            align-items: center;
          }

          footer i {
            color: #fff;
            margin-left: 1em;
          }

          footer p {
            color: #fff;
          }

          // ***** Typewriter Keyframes *****

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

          img {
            height: 200px;
          }

          //  ***** Media Queries Keyframes *****

          @media (max-width: 1024px) {
            .home-page-hero {
              height: 94vh;
              margin-bottom: 1.65em;
            }

            section.about-me {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-top: 3em;
              height: 95vh;
            }

            section.project {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 95vh;
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
};

export default Home;
