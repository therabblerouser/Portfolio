import React from 'react';
import { GitHub } from '@material-ui/icons';

const ProjectList = ({ data }) => {
  const listProjects = data.map(
    ({ id, title, repository, description, tools, site }) => (
      <div key={id} className="project-desc">
        <a href={site}>
          <h4>{title}</h4>
        </a>
        <div className="descriptions">
          <a className="repository-link" href={repository}>
            <GitHub />
          </a>
          <span>{tools}</span>
        </div>
        <p>{description}</p>
      </div>
    )
  );

  return (
    <>
      <div id="projects" className="project scrollspy">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-img">{listProjects}</div>
        </div>
      </div>
      <style>
        {`
         .project {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--font-color);
            padding-top: 1.5em;
            padding-bottom: 1.5em;
            height: 100vh;
          }

          .project h2 {
            font-weight: 500;
            font-size: 2.5rem;
            color: var(--font-color);
          }

          .project-img {
           display: flex;
           flex-direction: column;
           margin-left: 1em;
          }

          .project-info {
            padding-top: 5rem;
            padding-left: 1rem;
          }

        .project-desc {
          font-weight: 300;
          margin-top: 1em;
        }

        .project-desc h4 {
          color: #82adc9;
        }

        .descriptions {
          display: flex;
          align-items: center;
        }

        .descriptions span {
          color: var(--card-description-color);
          margin-left: 1em;
        }

        .repository-link {
          color: var(--font-color);
          transition: color 0.1s ease;
        }

        .repository-link:hover {
          color: #82adc9;
        }

        @media (max-width: 812px) {
          .container {
            margin-bottom: 8em;
          }
        }

      `}
      </style>
    </>
  );
};

export default ProjectList;
