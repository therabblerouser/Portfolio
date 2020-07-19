import React from 'react';
import LinkIcons from './LinkIcons';

const Footer = () => {
  const year = new Date().getFullYear().toString();

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="link">
              <LinkIcons />
            </div>
            <p>Joe McCann {year}</p>
          </div>
        </div>
      </footer>

      <style jsx>
        {`
          footer {
            height: 9vh;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1em;
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: 500;
          }

          footer p {
            color: var(--font-color);
          }
        `}
      </style>
    </>
  );
};
export default Footer;
