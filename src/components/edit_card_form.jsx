import React, { Component } from "react";

class EditCardForm extends Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    // update that fish
    //1. take a copy of the current card
    const updatedCard = {
      ...this.props.card,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateCard(this.props.index, updatedCard);
  };

  render() {
    return (
      <form className="card-edit" onSubmit={this.editCard}>
        <input
          type="text"
          name="title"
          value={this.props.card.title}
          onChange={this.handleChange}
        />
        <textarea
          name="description"
          value={this.props.card.description}
          onChange={this.handleChange}
        />
        <select
          name="checklist"
          value={this.props.card.checklist}
          onChange={this.handleChange}
        >
          <option value="inactive">Idea</option>
          <option value="active">Experiment defined</option>
        </select>
        <select
          name="table"
          value={this.props.card.table}
          onChange={this.handleChange}
        >
          {" "}
          {Object.keys(this.props.tables).map(key => (
            <option key={key} value={this.props.tables[key]}>
              {this.props.tables[key]}
            </option>
          ))}
        </select>
        <button
          className="delete-card"
          onClick={() => this.props.deleteCard(this.props.index)}
        >
          Delete{" "}
        </button>
        <button type="submit">Update </button>
      </form>
    );
  }
}

export default EditCardForm;
