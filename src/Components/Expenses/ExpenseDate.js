import React from 'react';
import './ExpenseDate.css';

export default function ExpenseDate(props) {
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const month = props.date.toLocaleString("en-US", { month: "short" });
    const year = props.date.getFullYear();
    return (
      <div>
        <div className="ExpenseItem_date">
          <div className="year">{year}</div>
          <div className="month">{month}</div>
          <div className="day">{day}</div>
        </div>
      </div>
    );
}
