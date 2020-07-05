import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import Project from './Project';

const Home = ({ darkMode }) => {
  const projects = [
    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'Airtable | React | Node',
    },

    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'Airtable | React | Node',
    },

    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'Airtable | React | Node',
    },

    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'Airtable | React | Node',
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
          <div className="expand-icon">
            <i className="material-icons">expand_more</i>
          </div>
        </div>

        <section className="about-me container">
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
              ex aliquam tempore explicabo cum perferendis officia molestiae
              iure eos dolor dolorum numquam distinctio quae ab pariatur ad
              nostrum obcaecati a!
            </p>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <h2 style={{ color: '#fff' }}>Projects</h2>
            <div className="contact-img-email">
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <h4>Footer links</h4>
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
            position: relative;
            height: calc((max(7.5px, 1vh) * 100) - 55px);
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

          section.about-me {
            padding-top: 1.8em;
            padding-bottom: 1.8em;
            color: var(--font-color);
          }

          section.about-me h2 {
            font-size: min(max(1.8rem, 4vw), 3rem);
            margin-bottom: 0.5em;
          }

          .inner-about-me {
            padding: 1em 1.5em;
          }

          .inner-about-me p {
            font-size: 20px;
            line-height: 1.8;
          }

          // ***** Contact Section *****

          .contact {
            background: var(--projects-color);
            color: var(--font-color);
            padding-top: 1rem;
          }

          .contact h2 {
            font-size: 40px;
            margin-bottom: 0;
          }

          .contact-img-email {
            display: flex;
            flex-direction: column;
            padding-bottom: 2rem;
            margin-top: 2em;
          }

          .contact-info {
            padding-top: 5rem;
            padding-left: 1rem;
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
              height: calc((13px * 100) - 55px);
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
