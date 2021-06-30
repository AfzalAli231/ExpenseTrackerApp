import React, { useState } from 'react';
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitChangeHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.expenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }


    return (
      <form onSubmit={submitChangeHandler}>
        <div className="input-form-controls">
          <div className="input-form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="input-form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="input-form-control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              min="2019-1-1"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="expense-form-button">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}
