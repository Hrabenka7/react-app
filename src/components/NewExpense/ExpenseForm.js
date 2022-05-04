import './ExpenseForm.css'
import React, { useState } from "react";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*Alternative - updating all values in one common state - disadvantage is that I need to update all even on single value update
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    // }); */

    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        /* When updating more values at once, use multiupdate B. A approach might not reflect the newest state as the React does not update state immediately
        
        APPROACH A
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })

        APPROACH B
        setUserInput((prevState)=>{
            return {...prevState, enteredTitle: event.target.value};
        })
        */
    }
   
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
   
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // do sent request = do not reload page

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log('ExpenseData', expenseData);
    };


    return <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"  onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
}


export default ExpenseForm;