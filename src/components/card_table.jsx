import React, { Component } from "react";
import AddTableForm from "./add_table_form";
import Card from "./card";
import AddCardForm from "./add_card_form";

class CardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidediv: true
    };
  }
  handleClick = event => {
    this.setState({ hidediv: !this.state.hidediv });
    console.log(event);
  };
  render() {
    return (
      <div className="card-table">
        {this.props.tables.map(table => (
          <div className="table-item" key={table}>
            {table}
            <ul className="card-list">
              {Object.keys(this.props.cards).map(key => (
                <Card key={key} index={key} card={this.props.cards[key]} />
              ))}
              <AddCardForm
                addCard={this.props.addCard}
                table={this.props.table}
              />
            </ul>
          </div>
        ))}
        <div className="add-table">
          <span>
            {" "}
            NEW COLUMN
            <button onClick={this.handleClick}>+</button>
          </span>
          <div hidden={this.state.hidediv}>
            <AddTableForm addTable={this.props.addTable}>
              New Column
            </AddTableForm>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTable;
