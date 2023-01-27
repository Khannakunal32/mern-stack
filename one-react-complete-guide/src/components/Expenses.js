// // (23) ********9

// import ExpenseItem from "./ExpenseItem";
// import "./Expenses.css";

// function Expenses(props) {
//   // (24) passed expenses array from App.js with all attributes title/amount/date

//   // (25) method -1 using map function to display all the array items of expenses

//   const show = props.items.map((it) => {
//     return (
//       <div>
//         <ExpenseItem title={it.title} amount={it.amount} date={it.date} />
//       </div>
//     );
//   });

//   return <div className="expenses">{show}</div>;

//   //  // (26) method 2 -  hard code all the value and display
//   //   return (
//   //     <div className="expenses">
//   //       {/* passed attribute was named <Expense item ={expense}> "item" so we will return it */}
//   //       <ExpenseItem
//   //         title={props.items[0].title}
//   //         amount={props.items[0].amount}
//   //         date={props.items[0].date}
//   //       />
//   //       <ExpenseItem
//   //         title={props.items[1].title}
//   //         amount={props.items[1].amount}
//   //         date={props.items[1].date}
//   //       />
//   //       <ExpenseItem
//   //         title={props.items[2].title}
//   //         amount={props.items[2].amount}
//   //         date={props.items[2].date}
//   //       />
//   //       <ExpenseItem
//   //         title={props.items[3].title}
//   //         amount={props.items[3].amount}
//   //         date={props.items[3].date}
//   //       />
//   //     </div>
//   //   );
// }

// export default Expenses;

// // after this go to Card.js (27) ******10


// ********12   {/* only <div> is changed to <Card> and a parameter/prop called "className" is passed to <Card> component no need to see this part go back to (31) Card.js */}

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  // (24) passed expenses array from App.js with all attributes title/amount/date

  // (25) method -1 using map function to display all the array items of expenses

  const show = props.items.map((it) => {
    return (
      <Card >
        <ExpenseItem title={it.title} amount={it.amount} date={it.date} />
      </Card>
    );
  });

  return <Card className="expenses">{show}</Card>;

}

export default Expenses;