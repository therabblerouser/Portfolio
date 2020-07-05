import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'Airtable | React | Node',
    },

    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'Airtable | React | Node',
    },

    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'Airtable | React | Node',
    },

    {
      title: 'Portfolio Project',
      description: 'This is my portfolio project. Check out the code I wrote.',
      tools: 'Airtable | React | Node',
    },
  ];

  return (
    <>
      <div className="col s12 m7">
        <div
          className="card horizontal"
          style={{
            background: 'var(--card-color)',
            boxShadow: '',
          }}
        >
          <div className="card-stacked">
            <div className="card-content">
              <h4>Portfolio</h4>
              <p>This is my portfolio project. Check out the code I wrote.</p>
            </div>
            <div className="card-action">
              <span className="badge">React</span>
              <span className="badge">Node</span>
              <span className="badge">Airtable</span>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
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

export default Projects;
