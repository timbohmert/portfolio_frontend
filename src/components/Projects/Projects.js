import React from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';

const Projects = (props) => {
  let projectsArray = props.portfolioProjects.map((project) => {
    return <Project project={project} />;
  });

  if (projectsArray.length === 0) {
    projectsArray = <p>Tim has not uploaded any projects at this time</p>;
  }

  console.log(projectsArray);

  return <div className={classes.Projects}>{projectsArray}</div>;
};

export default Projects;
