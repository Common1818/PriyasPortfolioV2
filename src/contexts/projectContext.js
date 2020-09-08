import React, { createContext, useReducer, useEffect } from "react";
import { projectReducer } from "../reducers/projectReducer";
import { getProject } from "../crudFunctions/projectFunctions";

export const ProjectContext = createContext();
const initState = {
  error: null,
};

const ProjectContextProvider = (props) => {
  const [project, dispatch] = useReducer(projectReducer, initState);
  useEffect(() => {
    getProject(dispatch);
  }, []);
  return (
    <ProjectContext.Provider value={{ project, dispatch }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
