// // (12) *****3 this is named as ExpenseItem E and I capital so that when used as a component <ExpenseItem> the basic html tags like <div> start with small and custom component start with capital
// // go to *****4  after this App.js

// import "./ExpenseItem.css";

// function ExpenseItem() {

//   const expenseAmount = 29.23;

//   return (
//     <div className="expense-item">
//       <div>March 23,2022</div>
//       {/* (13) in javascript we use class only but here we use className keyword */}
//       <div>
//         <h2 className="expense-item__description">Car insurance</h2>
//         <div className="expense-item__price">Rs {expenseAmount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;
// // // now go to App.js (14)

// // ******5

// import "./ExpenseItem.css";

// function ExpenseItem(props) {
//   // (16) passing all the attributes to the ExpenseItem function with name props

//     const month = props.date.toLocaleString('en-US', {month: 'long'});
//     const day = props.date.toLocaleString('en-US', {day: '2-digit'});
//     const year = props.date.getFullYear();

//   return (
//     <div className="expense-item">
//       {/* <div>{props.date.toISOString()}</div> */}

//             <div>
//                 <div>{month}</div>
//                 <div>{day}</div>
//                 <div>{year}</div>
//             </div>

//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">Rs {props.amount}</div>
//         {/* (17) remember name of the props."name" should be same as that of passed attribute ie passed in app.js in this case   (now read till end and we will be seperating date component into another file , go to ExpenseDate.js (18)*/}
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

// // (19) ********7  (we now use are made ExpenseDate component)

// import "./ExpenseItem.css";
// import ExpenseDate from "./ExpenseDate";

// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <ExpenseDate date={props.date} />
//       {/* (20) here the props from app.js is getting into ExpenseItem.js which has attribute of title, amount, date and further funneling down we are sending the date attribute to ExpenseDate.js component as prop now go to (21) App.js *****20 after reading this complete */}

//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">Rs {props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;




// **********11  (29)


import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">       
    {/* (30) only <div> is changed to <Card> and a parameter/prop called "className" is passed to <Card> component no need to see this part go back to (31) Card.js */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
