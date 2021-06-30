import React from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";

export default function NewExpense(props) {
  const getExpenseDataHandler = data => {
    const expenseData = {
      ...data,
      id: Math.round(Math.random() * 100),
    };
    props.expenseResponse(expenseData);
  }
    return (
      <Card className="expense-form">
        <ExpenseForm
          expenseData={getExpenseDataHandler}
        />
      </Card>
    );
}
