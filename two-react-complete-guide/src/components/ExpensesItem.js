// // *************2
// import "./ExpensesItem.css";
// import ExpenseDate from "./ExpenseDate";
// import Card from "./Card";

// const ExpensesItem = (props) => {
//   // (3) we see no rerender take place in react page , go to ******3 in expensesItem.js
//   let title = props.title;
  
//   const clickHandler = () => {
//     title='updated';
//     console.log(title);
//   }
  
//   return (
//     <Card className="expense-item" >
//         {/* <ExpenseDate day={day} month={month} year={year}></ExpenseDate> */}
//         <ExpenseDate date = {props.date}></ExpenseDate>
//       <div className="expense-item__description">
//       {/* <h2>{props.title}</h2> */}
//        <h2>{title}</h2>
//         <div className="expense-item__price">Rs {props.amount}</div>
//       </div>
//      {/* (2) adding on clickHandler to see if function changes without using useState from react */}
//       <button onClick={clickHandler}>update Title</button>
//     </Card>
//   );
// };

// export default ExpensesItem;




// *************3  
import React, { useState } from "react";
import "./ExpensesItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpensesItem = (props) => {

  // (4) this is how to declare use state  first is name of the parameter and second is function to change the perameter . Note use state rerenders the whole functions whenever we use the set function of useState to set a parameter thus real time changes takeplace in page . 
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  }
  
  return (
    <Card className="expense-item" >
        <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
     <button onClick={clickHandler}>update Title</button>
    </Card>
  );
};

export default ExpensesItem;
// (5) after reading this go to componensts/NewExpense/newExpense.js  ********4 