import React, { Component } from "react";

class ProjectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  myInput = React.createRef();

  goToProject = event => {
    // 1. stop ste form from submiting
    event.preventDefault();
    // 2. get the text from that input
    const projects = [...this.state.projects];
    const project = this.myInput.current.value;
    projects.push(project);
    this.setState({ projects });
    // 3. change the page to project/whatever-entered
    this.props.history.push(`/project/${project}`);
  };
  handleClick = event => {
    const project = this.myInput.current.value;
    this.props.history.push(`/project/${project}`);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.projects.map(project => (
            <li className="project-item" key={project}>
              {project}
              <button onClick={this.handleClick}>Go to project</button>
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
            defaultValue="project"
          />
          <button type="submit">Go to project</button>
        </form>
      </div>
    );
  }
}

export default ProjectPicker;
