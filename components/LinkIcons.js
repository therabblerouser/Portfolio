import React from 'react';
import { GitHub, LinkedIn } from '@material-ui/icons';

const LinkIcons = () => {
  return (
    <>
      <div className="icons">
        <a href="https://github.com">
          <GitHub />
        </a>
        <a href="https://linkedin.com">
          <LinkedIn />
        </a>
      </div>
      <style jsx>
        {`
          .icons a {
            padding-left: 1em;
            color: var(--font-color);
            transition: color 0.1s ease;
          }

          .icons a:hover {
            color: #82adc9;
          }
        `}
      </style>
    </>
  );
};

export default LinkIcons;
