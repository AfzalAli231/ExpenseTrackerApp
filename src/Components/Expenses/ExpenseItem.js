import React from 'react'
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem(props) {
    return (
      <li>
        <Card className="ExpenseItem">
          <ExpenseDate date={props.date} />
          <div className="ExpenseItem_description">
            <h2>{props.name}</h2>
            <p>${props.amount}</p>
          </div>
        </Card>
      </li>
    );
}
