import React, { Component } from "react";
import base from "../base";

class ProjectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {}
    };
  }
  componentDidMount() {
    this.ref = base.syncState("projects", {
      context: this,
      state: "projects"
    });
  }
  myInput = React.createRef();

  goToProject = event => {
    // 1. stop ste form from submiting
    event.preventDefault();
    // 2. get the text from that input

    const projects = { ...this.state.projects };
    const project = this.myInput.current.value;
    projects[`project${Date.now()}`] = project;
    this.setState({ projects });
    // 3. change the page to project/whatever-entered
    this.props.history.push(`/project/${project}`);
  };
  goToExistingProject = key => {
    const project = this.state.projects[key];
    this.props.history.push(`/project/${project}`);
  };

  deleteProject = key => {
    const projects = { ...this.state.projects };
    projects[key] = null;
    this.setState({ projects });
  };

  render() {
    if (
      Object.keys(this.state.projects) === null ||
      Object.keys(this.state.projects) === undefined
    ) {
      return (
        <div>
          <form className="project-selector" onSubmit={this.goToProject}>
            <h2>Please Enter A Project</h2>
            <input
              type="text"
              ref={this.myInput}
              required
              pladeholder="Project Name"
            />
            <button type="submit">Go to project</button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <ul className="project-list">
          {Object.keys(this.state.projects).map(key => (
            <li className="project-item" key={key}>
              {this.state.projects[key]}
              <button
                className="delete-project"
                onClick={() => this.deleteProject(key)}
              >
                x
              </button>
              <button onClick={() => this.goToExistingProject(key)}>
                Go to project
              </button>
            </li>
          ))}
        </ul>
        <form className="project-selector" onSubmit={this.goToProject}>
          <h2>Please Enter A Project</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            pladeholder="Project Name"
          />
          <button type="submit">Go to project</button>
        </form>
      </div>
    );
  }
}

export default ProjectPicker;
