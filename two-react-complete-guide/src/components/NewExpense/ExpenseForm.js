// // **********5 form data for user input , imported in newExpense.js
// import "./ExpenseForm.css";
// const ExpenseForm = () => {
//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text"></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min={0.01} step={0.01}></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="Date" min={"2019-01-01"} max={"2022-12-31"}></input>
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit" >Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
// // (7) go to ********6 in expense form

//  // *********6 event handler here */

// import { useState } from "react";
// import "./ExpenseForm.css";
// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");

//   // (8) here on every event in title box is console log out

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   };

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler}></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min={0.01} step={0.01}></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="Date" min={"2019-01-01"} max={"2022-12-31"}></input>
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

// // // ************7 (8)

// import { useState } from "react";
// import "./ExpenseForm.css";
// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   // (8) here on every event in title box is console log out

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//   };

//   // // (9) the above code can be written as in one useState() like below

//   // const [enteredInput, setEnteredInput] = useState({
//   //     enteredTitle:'',
//   //     enteredAmount:'',
//   //     enteredDate:'',
//   // });

//   // const titleChangeHandler = (event) => {
//   //  setEnteredInput( (prevState) => {
//   //    return {...prevState, enteredTitle: event.target.value }
//   //   });
//   // };
//   // const amountChangeHandler = (event) => {
//   //  setEnteredInput( (prevState) => {
//   //    return {...prevState, enteredAmount: event.target.value }
//   //   });
//   // };
//   // const dateChangeHandler = (event) => {
//   //  setEnteredInput( (prevState) => {
//   //    return {...prevState, enteredDate: event.target.value }
//   //   });
//   // };

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler}></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min={0.01} step={0.01} onChange={amountChangeHandler}></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="Date" min={"2019-01-01"} max={"2022-12-31"} onChange={dateChangeHandler}></input>
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
// // (10) go to ********8 in expenseForm.js

// // ***********8
// import { useState } from "react";
// import "./ExpenseForm.css";
// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//   };

//   // (12) this it to prevent default reload action on pressing submit button on form
//   const submitHandler = (event) => {
//     event.preventDefault();

//     const expenseData = {
//       title: enteredTitle,
//       amount: enteredAmount,
//       date: new Date(enteredDate),
//     };

//     console.log(expenseData);

//     // (13) this is to reset the form to empty value after submitting the values
//     setEnteredTitle("");
//     setEnteredAmount("");
//     setEnteredDate("");
//   };

//   return (
//     //(11) adding submit handler to form
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>

//           <input
//             type="text"
//           {/* (14) this is to reset the form to empty value after submitting the values */}
//             value={enteredTitle}
//             onChange={titleChangeHandler}
//           ></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min={0.01}
//             step={0.01}
//             value={enteredAmount}
//             onChange={amountChangeHandler}
//           ></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="Date"
//             min={"2019-01-01"}
//             max={"2022-12-31"}
//             value={enteredDate}
//             onChange={dateChangeHandler}
//           ></input>
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
// // (15) go to *********9 in this file



// ***********9  (16) Now we will be passing the prop component from child to parent ie data received from expenseForm.js entered by user to NewExpense.js then further to App.js   , go to *********10 (17) newExpense.js  

import { useState } from "react";
import "./ExpenseForm.css";
//(19) adding prop to expenseForm function to pass to parent functions
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //(20) passing expense data object created above to the attribute created in newExpense.js, go to (21) in NewExpense.js
    props.onSubmitExportForm(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min={"2019-01-01"}
            max={"2022-12-31"}
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
