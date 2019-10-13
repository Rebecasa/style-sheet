import React, { Component } from "react";
import AddCardForm from "./add_card_form";
import EditCardForm from "./edit_card_form";

class Table extends Component {
  render() {
    const cardTable = Object.keys(this.props.cards).filter(
      key => this.props.cards[key].table === this.props.table
    );
    if (
      this.props.table === "BACKLOG" ||
      this.props.table === "IMPACT FILTER"
    ) {
      return (
        <ul className="card-list">
          <div>{this.props.table}</div>
          {cardTable.map(key => (
            <EditCardForm
              key={key}
              index={key}
              card={this.props.cards[key]}
              tables={this.props.tables}
              updateCard={this.props.updateCard}
              deleteCard={this.props.deleteCard}
            />
          ))}
          <AddCardForm addCard={this.props.addCard} table={this.props.table} />
        </ul>
      );
    }
    return (
      <ul className="card-list">
        <div>
          {this.props.table}
          <button
            className="delete-button"
            onClick={() => this.props.deleteTable(this.props.index)}
          >
            x
          </button>
        </div>
        {cardTable.map(key => (
          <EditCardForm
            key={key}
            index={key}
            card={this.props.cards[key]}
            tables={this.props.tables}
            updateCard={this.props.updateCard}
            deleteCard={this.props.deleteCard}
          />
        ))}
        <AddCardForm addCard={this.props.addCard} table={this.props.table} />
      </ul>
    );
  }
}

export default Table;
