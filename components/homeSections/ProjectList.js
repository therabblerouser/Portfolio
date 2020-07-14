import React from 'react';

const ProjectList = ({ data }) => {
  const listProjects = data.map(
    ({ id, title, repository, description, tools }) => (
      <div key={id} className="col s12 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <a href={repository}>
                <h4>{title}</h4>
              </a>
              <p>{description}</p>
            </div>
            <div className="card-action">
              <span className="badge">{tools}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <>
      <div className="project">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-img-email">{listProjects}</div>
        </div>
      </div>
      <style>
        {`

         // ***** project Section *****

         .project {
            color: var(--font-color);
            padding-top: 1.5em;
          }

          .project h2 {
            font-size: 2.5rem;
            margin-bottom: 1em;
            color: var(--font-color);
          }

          .project-img-email {
            display: flex;
            flex-direction: column;
            padding-bottom: 2rem;
            margin-top: 2em;
          }

          .project-info {
            padding-top: 5rem;
            padding-left: 1rem;
          }

        .card.horizontal {
          background: var(--card-color)
        }

        h4 {
          color: #82adc9;
        }

        .card-content {
          color: var(--card-description-color);
        }

        span.badge {
          color: var(--card-description-color);
        }

        //  ***** Media Queries Keyframes *****

        @media (max-width: 1024px) {
          
          section.project {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 95vh;
          }
        }
      `}
      </style>
    </>
  );
};

export default ProjectList;
