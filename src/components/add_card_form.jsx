import React, { Component } from "react";

class AddCardForm extends Component {
  titleRef = React.createRef();
  descriptionRef = React.createRef();
  checklistRef = React.createRef();

  createCard = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    const card = {
      table: this.props.table,
      title: this.titleRef.current.value,
      description: this.descriptionRef.current.value,
      checklist: this.checklistRef.current.value
    };
    this.props.addCard(card);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="card-edit" onSubmit={this.createCard}>
        <input
          name="title"
          ref={this.titleRef}
          type="text"
          placeholder="title"
        />
        <textarea
          name="description"
          ref={this.descriptionRef}
          placeholder="description"
        />
        <select name="checklist" ref={this.checklistRef}>
          <option value="inactive">Idea</option>
          <option value="active">Experiment defined</option>
        </select>
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

export default AddCardForm;

