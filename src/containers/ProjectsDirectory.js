import React, { useState } from 'react';
import Projects from '../components/Projects/Projects';
import PageTitle from '../components/UI/PageTitle/PageTitle';

const ProjectsDirectory = (props) => {
  const [portfolioProjects, setPortfolioProjects] = useState({
    projects: [
      {
        name: 'Pokemon',
        data: 'Pokemon project data here'
      },
      {
        name: 'Buck',
        data: 'Buckl project data here'
      },
      {
        name: 'Casino',
        data: 'Casino project data here'
      },
      {
        name: 'Maze Explorer',
        data: 'Maze Explorer project data here'
      },
      {
        name: 'Wilderness Escape Story',
        data: 'Wilderness Escape Story project data here'
      },
      {
        name: 'Stock Market Analysis',
        data: 'Stock Markert Analysis project data here'
      }
    ]
  });

  return (
    <React.Fragment>
      <PageTitle title="some cool stuff that I built:" />
      <Projects portfolioProjects={portfolioProjects.projects} />
    </React.Fragment>
  );
};

export default ProjectsDirectory;
