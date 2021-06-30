import React, { useState } from 'react';
import './App.css';
import Expenses from "./Components/Expenses/Expenses";
import Card from './Components/UI/Card';
import NewExpense from './Components/NewExpense/NewExpense';

const dummyExpenses = [
  { id: 0, title: "Book", amount: 15.2, date: new Date(2018, 12, 4) },
  { id: 2, title: "Glass", amount: 18.3, date: new Date(2021, 1, 23) },
  { id: 3, title: "Laptop", amount: 15.4, date: new Date(2022, 3, 22) },
];
  
function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);
  
  const getExpenseData = (data) => {
    setExpenses(prevState => {
      return [data, ...prevState];
    })
  }

  return (
    <div className="App">
      <h1 className>Expense Tracker</h1>
      <NewExpense expenseResponse={getExpenseData} />
      <Card className="expense-bg">
        <Expenses expense={expenses} />
      </Card>
    </div>
  );
};
export default App;