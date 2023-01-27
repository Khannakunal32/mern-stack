import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFitler from "./NewExpense/ExpesesFilter";
import { useState } from "react";

const Expenses = (props) => {
//(29)
const [filteredYear,setFilteredYear] = useState('2020');

// (28)
  const filterChangeHandler = (selectedYear) => {
      // console.log(selectedYear);
      // (30)
      setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
    {/* (27) */}
    <ExpensesFitler selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFitler>
      <ExpensesItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpensesItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpensesItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpensesItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
