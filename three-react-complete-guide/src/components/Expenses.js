// import ExpensesItem from "./ExpensesItem";
// import "./Expenses.css";
// import Card from "./Card";
// import ExpensesFitler from "./NewExpense/ExpesesFilter";
// import { useEffect, useState } from "react";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   // console.log(newFilteredList);

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   // (8) this is the way to filter items with a filter function
//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <Card className="expenses">
//       <ExpensesFitler
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />
//       {/* **********2 (5) use map function*/}

//       {filteredExpenses.map((element) => (
//         <ExpensesItem
//           // (7) we right key = id to give a unique id to each div element bieng added to the list so that React can uniquely identify elements and add them to the list at a right place. Also if we dont specify key then react rerender the whole list component that result in issues as it dont know where to insert the element and see as if the size of list is increased after insertion so render the whole list component again. Thus we should aloways add key while we are using map rendering function
//           key={element.id}
//           title={element.title}
//           // (6) add + in front of element.amount to convert it into a number
//           amount={+element.amount}
//           date={element.date}
//         ></ExpensesItem>
//       ))}
//     </Card>
//   );
// };

// export default Expenses;

// // (9) we use ternary operator to show a <p> message list with empty list in filteredExpenses
// import ExpensesItem from "./ExpensesItem";
// import "./Expenses.css";
// import Card from "./Card";
// import ExpensesFitler from "./NewExpense/ExpesesFilter";
// import { useState } from "react";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   // (12) 3rd and cleanes method
//   let expenseContent = <p>Empty List</p>;

//   if(filteredExpenses.length > 0){
//     expenseContent = filteredExpenses.map((element) =>
//       <ExpensesItem
//             key={element.id}
//             title={element.title}
//             amount={+element.amount}
//             date={element.date}
//           ></ExpensesItem>
//     )
//   }

//   return (
//     <Card className="expenses">
//       <ExpensesFitler
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />

//       {/* (10) 1st method */}
//       {/* {filteredExpenses.length === 0 ? (
//         <p>Empty List</p>
//       ) : (
//         filteredExpenses.map((element) => (
//           <ExpensesItem
//             key={element.id}
//             title={element.title}
//             amount={+element.amount}
//             date={element.date}
//           ></ExpensesItem>
//         ))
//       )} */}

//       {/* (11) 2nd method if first condition before && is true then second executes and become true*/}
//       {/* {filteredExpenses.length === 0 && <p>Empty list</p>}
//       {filteredExpenses.length > 0 &&
//         filteredExpenses.map((element) => (
//           <ExpensesItem
//             key={element.id}
//             title={element.title}
//             amount={+element.amount}
//             date={element.date}
//           ></ExpensesItem>
//         ))} */}

//         {/* (13) Now go to ExpenseList.js for shortening this code and splitting into anther componenet */}
//         {expenseContent}
//     </Card>
//   );
// };

// export default Expenses;

import "./Expenses.css";
import Card from "./Card";
import ExpensesFitler from "./NewExpense/ExpesesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFitler
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
};

export default Expenses;
