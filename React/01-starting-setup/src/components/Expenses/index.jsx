import React, {useState} from "react";
import "./style.css";

import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpenseFilter";
import Card from "../UI/Card";

function Expenses({ data }) { //STATEFULL (manage states from another components), and the filter just render JSX

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onExpenseFilterChange={filterChangeHandler}/>
        <ExpenseItem
          title={data[0].title}
          amount={data[0].amount}
          date={data[0].date}
        />
        <ExpenseItem
          title={data[1].title}
          amount={data[1].amount}
          date={data[1].date}
        />
        <ExpenseItem
          title={data[2].title}
          amount={data[2].amount}
          date={data[2].date}
        />
        <ExpenseItem
          title={data[3].title}
          amount={data[3].amount}
          date={data[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
