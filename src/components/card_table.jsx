import React, { Component } from "react";
import AddTableForm from "./add_table_form";
import Table from "./table";

class CardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidediv: true
    };
  }
  handleClick = event => {
    this.setState({ hidediv: !this.state.hidediv });
  };
  render() {
    return (
      <div className="card-table">
        {this.props.tables.map(table => (
          <Table
            className="table-item"
            key={table}
            table={table}
            cards={this.props.cards}
            addCard={this.props.addCard}
          />
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
