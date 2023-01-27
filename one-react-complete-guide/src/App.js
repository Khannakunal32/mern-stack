// // (7)  ******2 then go to ExpenseItem.js
// //jsx file with javascipt and html mixed , it get transformed with react libararies to html and normal js

// // function App() {      // (8) normal javascript funciton making method
// //   return <div>First react complete guide</div>;
// // }

// import ExpenseItem from "./components/ExpenseItem";    // (9) can set ExpenseItem to any name

// const App = () => {
//   // (10) react method  although we can use any mehtod that is we can use above commented code also
//   return (
//     <div>
//       <h1> first react complete guide </h1>
//       <p>this is the end</p>
//       <ExpenseItem></ExpenseItem>
//     </div>
//   );
// };

// // (11)  in normal javascript to add a paragraph element only we need to write following code but react makes it easier by just adding using jsx
// // // const para = document.createElement('p');
// // // para.textContent = 'this is the end';
// // // document.getElementbyId('root').append(para);
// //  now go to ExpenseItem.js (12)
// export default App;

// // (14)  ******4

// import ExpenseItem from "./components/ExpenseItem";

// const App = () => {

//   const expenses = [
//     { title: "Car Insurance", amount: 292.53, date: new Date(2022, 2, 23) },
//     { title: "Toilet Paper", amount: 342.09, date: new Date(2021, 12, 1) },
//     { title: "New TV", amount: 61.63, date: new Date(2022, 30, 4) },
//     { title: "Desk (wooden)", amount: 783.22, date: new Date(2022, 1, 9) },
//   ];

//   return (
//     <div>
//       <h2>Lets get started</h2>
//       <ExpenseItem
//         title={expenses[0].title}
//         amount="292.53"
//         date={expenses[0].date}
//       />
//       {/* (15) passing attributes in ExpenseItem object to use as props/ parameter , title is taken value but amount is hardcoded value , so two ways to define  go to ExpenseItem.js (16) */}
//       <ExpenseItem
//         title={expenses[1].title}
//         amount={expenses[1].amount}
//         date={expenses[1].date}
//       />
//       <ExpenseItem
//         title={expenses[2].title}
//         amount={expenses[2].amount}
//         date={expenses[2].date}
//       />
//       <ExpenseItem
//         title={expenses[3].title}
//         amount={expenses[3].amount}
//         date={expenses[3].date}
//       />
//     </div>
//   );
// };

// export default App;

// // (21)  ******8 creating Expenses.js to show ExpenseItems read both methods one is old and one is new

import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 292.53, date: new Date(2022, 2, 23) },
    { title: "Toilet Paper", amount: 342.09, date: new Date(2021, 12, 1) },
    { title: "New TV", amount: 61.63, date: new Date(2022, 30, 4) },
    { title: "Desk (wooden)", amount: 783.22, date: new Date(2022, 1, 9) },
  ];

  // // method 1  new using jsx
  return (
    <div>
      <h2>Lets get started</h2>
      <Expenses items={expenses}></Expenses>
      {/* (22) passing expenses as attribute to Expenses component which will use it as prop , now go to Expenses.js 23 *****9 */}
    </div>
  );

  // // method 2 old using import of React from react
  // return React.createElement( 'div', {}, React.createElement( 'h2', {}, "Lets get Started"), React.createElement(Expenses, { items: expenses }, ));
};

export default App;
