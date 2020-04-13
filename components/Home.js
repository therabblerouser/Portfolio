import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col l6 m8 s12">
          <img src="/helloquence-5fNmWej4tAA-unsplash.jpg" alt="" />
        </div>
        <div className="col l6 m4 s12">
          <div className="row" style={{ marginLeft: '0.2rem' }}>
            <h4>Hi, I'm Joe McCann, you next Fullstack Web Developer</h4>
            <div>
              Contact Me{' '}
              <a href="mailto:mccannjoe42@gmail.com">mccannjoe42@gmail.com</a>.
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 95%;
          }

          .row .col {
            padding: 0;
          }

          img {
            height: 100%;
            width: 100%;
          }

          h4 {
            margin-top: 8rem;
          }

          @media (max-width: 576px) {
            img {
              height: 100%;
              width: 100%;
            }

            h4 {
              margin-top: 2rem;
            }

            .row .col {
              display: flex;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
