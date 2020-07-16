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
            color: #fff;
            padding-left: 1em;
          }
        `}
      </style>
    </>
  );
};

export default LinkIcons;
