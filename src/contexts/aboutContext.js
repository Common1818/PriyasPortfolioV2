import React, { createContext, useReducer, useEffect } from "react";
import { aboutReducer } from "../reducers/aboutReducer";
import { getAbout } from "../crudFunctions/aboutFunctions";

export const AboutContext = createContext();
const initState = {
  error: null,
};

const AboutContextProvider = (props) => {
  const [about, dispatch] = useReducer(aboutReducer, initState);
  useEffect(() => {
    getAbout(dispatch);
  }, []);
  return (
    <AboutContext.Provider value={{ about, dispatch }}>
      {props.children}
    </AboutContext.Provider>
  );
};

export default AboutContextProvider;
