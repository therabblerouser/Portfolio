import React from 'react';

const About = () => (
  <>
    <div className="about-me">
      <div className="container">
        <h2>About</h2>
        <div className="inner-about-me">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ex
            aliquam tempore explicabo cum perferendis officia molestiae iure eos
            dolor dolorum numquam distinctio quae ab pariatur ad nostrum
            obcaecati a!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ex
            aliquam tempore explicabo cum perferendis officia molestiae iure eos
            dolor dolorum numquam distinctio quae ab pariatur ad nostrum
            obcaecati a!
          </p>
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .about-me {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 1.5em;
          padding-bottom: 1.5em;
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

        .inner-about-me p {
          font-size: 20px;
          line-height: 1.8;
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
      `}
    </style>
  </>
);

export default About;
