import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="group">
        <div className="profilePic">
          <img src="/helloquence-5fNmWej4tAA-unsplash.jpg" alt="" />
        </div>
        <div className="programmerDescription">
          <div>
            <h2>Fullstack Web Developer</h2>
            <h5>REACT | NEXT.JS | NODE.JS</h5>
            <div>
              Contact me:{' '}
              <a href="mailto:mccannjoe42@gmail.com">mccannjoe42@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 95%;
          }

          img {
            height: 125%;
            width: 96%;
          }

          h2 {
            font-size: 3.2rem;
          }

          .group {
            display: flex;
            justify-content: space-between;
          }

          .profilePic {
            width: 60%;
          }

          .programmerDescription {
            margin-top: 10rem;
          }

          @media (max-width: 576px) {
            .group {
              display: block;
            }
            img {
              height: 100%;
              width: 100%;
            }

            .profilePic {
              width: 100%;
            }

            .programmerDescription {
              margin-top: 0rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
