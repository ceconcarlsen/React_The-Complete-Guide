import React, {useState} from "react";
import "./style.css";

import ExpenseDate from "../ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  const [title, setTtile] = useState(props.title);

  const clickHandler = () =>{
    setTtile("Updated!");
  }

  return (
    <Card className="expense-item"> {/*css do Card + expense-item */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2 ">{title}</h2>
        <div className="expense-item__price">R$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> {/*onClick run clickHandler*/}
    </Card>
  );
}

export default ExpenseItem;
