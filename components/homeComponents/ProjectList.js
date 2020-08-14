import React from 'react';
import Project from '../homeComponents/Project';

import axios from 'axios';
import useSWR from 'swr';

const ProjectList = () => {
  const fetcher = async (url) => {
    let res = await axios.get(url);
    let { data } = res.data;
    return data;
  };

  const { data, error } = useSWR(
    `${process.env.API_BASE_URL}/api/projects`,
    fetcher
  );

  if (error) return;
  if (!data)
    return (
      <>
        <div>loading...</div>
        <style jsx>
          {`
            div {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </>
    );

  return (
    <>
      <Project data={data} />
    </>
  );
};

export default ProjectList;
