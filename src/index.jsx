import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history";
import App from "./components/app";
import ProjectPicker from "./components/project_picker";
import NotFound from "./components/not_found";

import "../assets/stylesheets/application.scss";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={ProjectPicker} />
      <Route exact path="/project/:project_id" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
