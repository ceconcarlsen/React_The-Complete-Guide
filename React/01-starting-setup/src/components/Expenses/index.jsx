import React, { useState } from "react";
import "./style.css";

import ExpensesFilter from "../ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "../ExpensesList";
import ExpensesChart from "../ExpensesChart";

function Expenses({ data }) {
  //STATEFULL (manage states from another components), and the filter just render JSX

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; //true or false
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterChange={filterChangeHandler}
        />
        <ExpensesChart  expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
