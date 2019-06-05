import React, { Component } from "react";
import Header from "./header";
import CardTable from "./card_table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: ["BACKLOG", "IMPACT FILTER"],
      cards: {}
    };
  }

  addTable = table => {
    // 1. take a copy of existing state
    const tables = [...this.state.tables];
    // 2. add our new table to that tables variable
    const upperCaseTable = table.toUpperCase();
    tables.push(upperCaseTable);
    this.setState({ tables });
  };

  addCard = card => {
    const cards = this.state.cards;
    cards[`card${Date.now()}`] = card;
    this.setState({ cards });
  };

  render() {
    return (
      <div>
        <div className="header">
          <Header tagline="title" />
        </div>
        <CardTable
          tables={this.state.tables}
          addTable={this.addTable}
          cards={this.state.cards}
          addCard={this.addCard}
        />
      </div>
    );
  }
}

export default App;
