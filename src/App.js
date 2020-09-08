// imports
import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./components/commonStyles/animations.css";

//

// Bootstrap
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Bottom from "./components/Bottom/bottom";
//

// Components

//
import HomeContextProvider from "./contexts/homeContext";
import AboutContextProvider from "./contexts/aboutContext";
import ProjectContextProvider from "./contexts/projectContext";

const App = () => {
  // const { authState } = useContext(AuthContext);

  return (
    <div className="App">
      <HomeContextProvider>
        <AboutContextProvider>
          <ProjectContextProvider>
            <Home />
            <Navbar />
            <About />
            <Projects />
            <Bottom />
          </ProjectContextProvider>
        </AboutContextProvider>
      </HomeContextProvider>
    </div>
  );
};

export default App;
