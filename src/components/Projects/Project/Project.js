import React from 'react';
import classes from './Project.module.css';
import ProjectImage from './ProjectImage/ProjectImage';
import ProjectTitle from './ProjectTitle/ProjectTitle';

const Project = (props) => (
  <div className={classes.Project}>
    <ProjectImage />
    <ProjectTitle projectName={props.project.name} />
  </div>
);

export default Project;
