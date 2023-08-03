/** @format */

import { useFetchProjects } from './fetchProjects';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  return <div>Projects</div>;
};
export default Projects;
