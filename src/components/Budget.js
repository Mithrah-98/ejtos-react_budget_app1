import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, handleSetBudget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget.toString());

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setNewBudget(value.toString());
    }
  };

  const handleBlur = () => {
    handleSetBudget(parseInt(newBudget));
  };

  return (
    <div className='alert alert-secondary'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Budget: £</span>
        <input type='number' value={newBudget} onChange={handleInputChange} onBlur={handleBlur} />
      </div>
    </div>
  );
};

export default Budget;
