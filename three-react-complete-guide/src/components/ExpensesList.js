// (14)
import ExpensesItem from "./ExpensesItem";
import './ExpensesList.css';

const ExpensesList = (props) => {


  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found</p>;
  }
  
  return (
    <ul className="expenses-list">
      {props.items.map((element) => (
        <ExpensesItem
          key={element.id}
          title={element.title}
          amount={+element.amount}
          date={element.date}
        ></ExpensesItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
