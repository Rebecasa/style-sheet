import React from "react";
import Card from "./card";
import AddCardForm from "./add_card_form";

const CardList = props => {
  if (props.cards === null || props.cards === undefined) {
    return <AddCardForm addCard={props.addCard} />;
  }
  return (
    <ul className="card-list">
      {Object.keys(props.cards).map(key => (
        <Card key={key} index={key} card={props.cards[key]} />
      ))}
      <AddCardForm addCard={props.addCard} table={props.table} />
    </ul>
  );
};

export default CardList;
