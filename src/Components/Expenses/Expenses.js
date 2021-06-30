import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredByYear = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
      <Card className="epense">
        <ExpenseFilter
          selected={filteredYear}
          onFilteredChangeYear={filteredChangeHandler}
        />
        {filteredByYear.length === 0 ? (
          <h3>No Expense Found!</h3>
        ) : (
          filteredByYear.map((expense) => {
            return (
              <ExpenseItem
                name={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )}
      </Card>
    );
}
