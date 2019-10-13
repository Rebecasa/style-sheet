import React, { Component } from "react";
import Header from "./header";
import CardTable from "./card_table";
import base from "../base";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: { 0: "BACKLOG", 1: "IMPACT FILTER" },
      cards: {}
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    const tables = { ...this.state.tables };
    const cards = { ...this.state.cards };
    this.ref = base.syncState(`${params.project_id}/tables`, {
      context: this,
      state: "tables"
    });
    this.ref = base.syncState(`${params.project_id}/cards`, {
      context: this,
      state: "cards"
    });
    this.setState({ tables });
    this.setState({ cards });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTable = table => {
    // 1. take a copy of existing state
    const tables = { ...this.state.tables };
    // 2. add our new table to that tables variable
    const upperCaseTable = table.toUpperCase();
    tables[`table${Date.now()}`] = upperCaseTable;
    this.setState({ tables });
  };

  addCard = card => {
    const cards = { ...this.state.cards };
    cards[`card${Date.now()}`] = card;
    this.setState({ cards });
  };

  updateCard = (key, updatedCard) => {
    const cards = { ...this.state.cards };
    cards[key] = updatedCard;
    this.setState({ cards });
  };

  deleteCard = key => {
    const cards = { ...this.state.cards };
    cards[key] = null;
    this.setState({ cards });
  };

  deleteTable = key => {
    const tables = { ...this.state.tables };
    tables[key] = null;
    this.setState({ tables });
  };

  render() {
    const tagline = this.props.location.pathname.split("/");
    return (
      <div>
        <div className="header">
          <Header tagline={tagline[2]} />
        </div>
        <CardTable
          tables={this.state.tables}
          addTable={this.addTable}
          cards={this.state.cards}
          addCard={this.addCard}
          updateCard={this.updateCard}
          deleteCard={this.deleteCard}
          deleteTable={this.deleteTable}
        />
      </div>
    );
  }
}

export default App;
