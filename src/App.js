import React from 'react';
import Layout from './components/Layout/Layout';
import ProjectsDirectory from './containers/ProjectsDirectory';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <ProjectsDirectory />
      </Layout>
    </div>
  );
};

export default App;
