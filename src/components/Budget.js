import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget.toString()); // Convert budget to a string

    const handleInputChange = (event) => {
        // Ensure the newBudget is an integer
        const value = parseInt(event.target.value);

        // Check if the input value is a valid integer and does not exceed the upper limit
        if (!isNaN(value) && value >= 0) {
            // Set the upper limit to 20,000
            const adjustedValue = Math.min(value, 20000);
            setNewBudget(adjustedValue.toString());
        }
    };
  const handleBlur = () => {
        // Ensure the newBudget is an integer
        const updatedBudget = parseInt(newBudget);
        // Set the upper limit to 20,000
        const adjustedBudget = Math.min(updatedBudget, 20000);
        dispatch({
            type: 'SET_BUDGET',
            payload: adjustedBudget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Budget: {currency}</span>
                <input
                    type='number'
                    value={newBudget}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    step={10} // Set the step increment to 10 for the built-in input arrows
                    max={20000} // Set the upper limit for the input field
                />
            </div>
        </div>
    );
};

export default Budget;
