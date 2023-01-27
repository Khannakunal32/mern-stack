import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const exportFormHandler = (submittedExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...submittedExpenseData,
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExportForm={exportFormHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
