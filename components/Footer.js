import React from 'react';
import { GitHub, LinkedIn } from '@material-ui/icons';

const Footer = () => {
  const year = new Date().getFullYear().toString();

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-icons">
              <a href="https://github.com">
                <GitHub />
              </a>
              <a href="https://linkedin.com">
                <LinkedIn />
              </a>
            </div>
            <p>Joe McCann {year}</p>
          </div>
        </div>
      </footer>

      <style jsx>
        {`
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

          .footer-icons a {
            color: #fff;
            padding-left: 1em;
          }

          footer p {
            color: #fff;
          }
        `}
      </style>
    </>
  );
};
export default Footer;
