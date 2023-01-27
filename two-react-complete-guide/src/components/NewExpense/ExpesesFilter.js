// ************13 after this go to Expenses.js

// this is a controlled component ie props data arre passed through parent component ie through expenses.js and a we mainpulatate it and send back to Expenses.js
 
import './ExpensesFilter.css';
const ExpensesFitler = (props) => {

    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        // console.log(event.target.value);
    }

    return(
        <div className='dropDownMain'>
            <div className='dropDownFilter'>
                <label>Filter By year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFitler;