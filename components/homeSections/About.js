import React from 'react';

const About = () => (
  <>
    <div className="about-me">
      <div className="container">
        <h2>About</h2>
        <div className="inner-about-me">
          <div className="img-par">
            <img
              src="./toa-heftiba-ImqbTNUoTD0-unsplash.jpg"
              alt="Joe"
              className="circle"
            />
            <p>
              Hi! My name is Joe McCann. I am a junior Full Stack Web Developer
              who specializes in React, Node and Next.js.
            </p>
          </div>
          <p>
            I love spending time building javascript projects and learning about
            new technologies.
          </p>
          <p>
            I am currently looking for work. Send me a message, I would love to
            work with you in the near future!
          </p>

          <div className="contact-me">
            <p>
              Contact:{' '}
              <a href="mailto:tojmccann@gmail.com">tojmccann@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .about-me {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          background: var(--projects-color);
          height: 92vh;
        }

        .about-me h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5em;
        }

        .inner-about-me {
          padding: 1em 1.5em;
        }

        .inner-about-me img {
          height: 7em;
          width: 7em;
        }

        .img-par {
          display: flex;
          flex
          justify-content: space-between;
          align-items: center;
        }

        .img-par p {
          margin-left: 1em;
        }

        .inner-about-me p {
          font-size: 20px;
          line-height: 1.8;
        }

        .contact-me {
          display: flex;
          justify-content: flex-end;
          margin-top: 5em;
          margin-right: 3em;
        }

        .contact-me p a {
          color: #fff;
        }

        //  ***** Media Queries *****

        @media (max-width: 1024px) {
          .about-me {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 3em;
            height: 95vh;
          }
        }

        @media (max-width: 375px) {
          .inner-about-me p {
            font-size: 15px;
            line-height: 1.3;
          }
        }
      `}
    </style>
  </>
);

export default About;
