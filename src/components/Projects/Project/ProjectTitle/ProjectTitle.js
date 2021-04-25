import React from 'react';
import classes from './ProjectTitle.module.css';

const ProjectTitle = (props) => (
  <div className={classes.ProjectTitle}>
    <h2>{props.projectName}</h2>
  </div>
);

export default ProjectTitle