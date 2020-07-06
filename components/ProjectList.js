import React from 'react';

const ProjectList = ({ projects }) => {
  const listProjects = projects.map((project) => {
    return (
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <a href={project.repository}>
                <h4>{project.title}</h4>
              </a>
              <p>{project.description}</p>
            </div>
            <div className="card-action">
              <span className="badge">{project.tools}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {listProjects}
      <style>
        {`
        .card.horizontal {
          background: var(--card-color)
        }

        h4 {
          color: var(--card-title-color)
        }

        .card-content {
          color: #fff;
        }

        span.badge {
          color: #fff;
        }

      `}
      </style>
    </>
  );
};

export default ProjectList;
