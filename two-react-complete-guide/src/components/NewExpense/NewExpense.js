// // **********4 (for user input expneses list)  exported in app.js 
// import ExpenseForm from './ExpenseForm';
// import './NewExpense.css';

// const NewExpense = () => {
//     return (
//         <div className="new-expense">
//             {/* (6) go to expenseForm ********5 */}
//             <ExpenseForm ></ExpenseForm>
//         </div>
//     )
// }

// export default NewExpense;


// // **********10 
// import ExpenseForm from './ExpenseForm';
// import './NewExpense.css';

// const NewExpense = () => {

//     // (18) creating handler for the exportForm , after reading the below function go to (19) expenseForm.js
//     const exportFormHandler = (submittedExpenseData) => {
//         const expenseData = {
//             ...submittedExpenseData,
//             id: Math.random().toString(),
//         };

//         // (21) while consoling out you will see it is output from NewExpense.js , after this go to ********11 in app.js
//         console.log(expenseData);
//     }


//     return (
//         <div className="new-expense">
//         {/* (17) creating a prop to export data from in expenseForm */}
//             <ExpenseForm onSubmitExportForm={exportFormHandler}></ExpenseForm>
//         </div>
//     )
// }

// export default NewExpense;

// **********12
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// (24) adding prop to pass on to app.js
const NewExpense = (props) => {
    
    const exportFormHandler = (submittedExpenseData) => {
        const expenseData = {
            ...submittedExpenseData,
            id: Math.random().toString(),
        };

        //(25) passing expenseData to the attribute created and passed in app.js as <NewExpense onAddExpense={} , after this go ***********13 ExpensesFilter.js (26)/>

        props.onAddExpense(expenseData);

    }


    return (
        <div className="new-expense">
           <ExpenseForm onSubmitExportForm={exportFormHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;