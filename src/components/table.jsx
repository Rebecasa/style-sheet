import React, { Component } from "react";
import Card from "./card";
import AddCardForm from "./add_card_form";

class Table extends Component {
  render() {
    const cardTable = Object.keys(this.props.cards).filter(
      key => this.props.cards[key].table === this.props.table
    );

    return (
      <ul className="card-list">
        <h3>{this.props.table}</h3>
        {cardTable.map(key => (
          <Card key={key} index={key} card={this.props.cards[key]} />
        ))}
        <AddCardForm addCard={this.props.addCard} table={this.props.table} />
      </ul>
    );
  }
}

export default Table;
