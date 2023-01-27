import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFitler from "./NewExpense/ExpesesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // console.log(props.items[0].title);

  return (
    <Card className="expenses">
      <ExpensesFitler
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFitler>
      {/* **********2 (5) use map function*/}
      {props.items.map((element) => (
        <ExpensesItem
          title={element.title}

          // (6) add + in front of element.amount to convert it into a number
          amount={+element.amount}
          date={element.date}
        ></ExpensesItem>
      ))}
      {/* <ExpensesItem
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}></ExpensesItem> */}
    </Card>
  );
};

export default Expenses;
