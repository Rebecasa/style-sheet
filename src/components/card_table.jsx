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
        {Object.keys(this.props.tables).map(key => (
          <Table
            className="table-item"
            key={key}
            index={key}
            table={this.props.tables[key]}
            cards={this.props.cards}
            tables={this.props.tables}
            addCard={this.props.addCard}
            updateCard={this.props.updateCard}
            deleteCard={this.props.deleteCard}
            deleteTable={this.props.deleteTable}
          />
        ))}
        <div className="add-table">
          <span>
            {" "}
            NEW COLUMN
            <button onClick={this.handleClick} className="plus-sign">
              +
            </button>
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
