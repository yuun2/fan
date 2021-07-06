import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import Projects from "../../pages/projects/Projects";
import Buildup from "../../pages/buildup/Buildup";
import Findteam from "../../pages/findteam/Findteam";
import ProjectDetails from "../../pages/projects/ProjectDetails";

import Header from "../appbar/Appbar";
import Categories from "../../components/categories/Categories";

function App() {
  let location = useLocation();
  return (
    <>
      <Header />
      <Categories />
      <Switch location={location.background} >
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects" component={Projects} />
        <Route path="/buildup" component={Buildup} />
        <Route path="/findteam" component={Findteam} />
        <Route path="/projectDetail/:projectIndex" component={ProjectDetails} />
      </Switch>      
    </>
  );
}

export default App;
