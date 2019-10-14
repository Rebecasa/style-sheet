import React, { Component } from "react";

class AddTableForm extends Component {
  tableTitleRef = React.createRef();

  createTable = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    const table = this.tableTitleRef.current.value;
    this.props.addTable(table);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="table-edit" onSubmit={this.createTable}>
        <input
          name="title"
          ref={this.tableTitleRef}
          type="text"
          placeholder="Title"
        />
        <div className='add-columns-button'>
          <button type="submit">Add Column</button>
        </div>
      </form>
    );
  }
}

export default AddTableForm;
