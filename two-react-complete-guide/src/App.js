// import ExpensesItem from "./components/ExpensesItem";
// import Expenses from "./components/Expenses";
// import NewExpense from "./components/NewExpense/NewExpense";
// function App() {

//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];


//   return (
//     <div >
//     <h2>Lets get started</h2>
//     <NewExpense  />
//     <Expenses items = {expenses}></Expenses>
//     </div>
//   );
// }

// export default App;



//*********11  */
import ExpensesItem from "./components/ExpensesItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // (22) passing data receved from ExpenseForm.js to NewExpense.js to app.js 
  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
  }
  return (
    <div >
    {/* <h2>Lets get started</h2> */}
    {/*  (23) after this go to ************12 (24) NewExpense.js */}
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
