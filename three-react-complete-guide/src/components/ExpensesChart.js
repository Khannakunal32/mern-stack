import Chart from "./Chart/Chart";

// (21) this will take expenses that is array of id title amount data and calculate the total amount for each month
const ExpenseChart = (props) => {

  //(22) we create array of objects dataPoints with initial value for each month as 0
  const dataPointValues = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // (23) Now we reCalculate dataPointValues for each month in a filtered Year this can be done as below but map function expects a return value so we use for loop instead
  //   props.expenses.map((expense) => {
  //     dataPointValues[expense.date.getMonth()].value += expense.amount;
  //   });

  // we use "for of" loop as props.expenses is an array , if it was an object then we use "for in loop"
  for (const expense of props.expenses) {
    // getMonth return 0 for Januaury and so on , so we can use it for filling array of objects
    const expenseMonth = expense.date.getMonth();
    dataPointValues[expenseMonth].value += expense.amount;
  }

    return <Chart  dataPoints={dataPointValues}/>;
};
//(24 now go to chart.js)

export default ExpenseChart;
