import React from "react";
import "./style.css";

import ExpenseItem from "../ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          //KEY IS VERY IMPORTANT *******
          key={expense.id} // avoid bugs and performance issues, with key, we say to react that each component it's unique
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
}

export default ExpensesList;
