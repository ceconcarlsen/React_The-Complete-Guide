import React from "react";
import "./style.css";


import ExpenseDate from "../ExpenseDate";
import Card from "../Card";

function ExpenseItem({ title, amount, date }) {
  return (
    <Card className="expense-item"> {/*css do Card + expense-item */}
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2 ">{title}</h2>
        <div className="expense-item__price">R$ {amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
