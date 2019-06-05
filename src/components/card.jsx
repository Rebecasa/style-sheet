import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.card.title}</h3>
        <p>{this.props.card.description}</p>
        <p>{this.props.card.checklist}</p>
      </div>
    );
  }
}

export default Card;
