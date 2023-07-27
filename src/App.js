import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    const [currency, setCurrency] = useState('£');

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm-4'>
                        <div className='input-group mb-3'>
                            <div className='input-group-prepend'>
                                <label className='input-group-text'>Currency:</label>
                            </div>
                            <select
                                className='custom-select'
                                value={currency}
                                onChange={handleCurrencyChange}
                            >
                                <option value='£'>£ Pound</option>
                                <option value='$'>$ Dollar</option>
                                <option value='€'>€ Euro</option>
                                <option value='₹'>₹ Rupee</option>
                            </select>
                        </div> </div>
                </div>
    <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
