import React from "react";
import "./style.css";

import ExpenseDate from "../ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //STATELESS (*Dumb)
  return (
    <li>
      <Card className="expense-item">
        {" "}
        {/*css do Card + expense-item */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item h2 ">{props.title}</h2>
          <div className="expense-item__price">R$ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
