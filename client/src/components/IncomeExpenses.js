import React, { useContext } from 'react'
import { GlobalState } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalState);
  const amounts = transactions.map(trans => trans.amount);
  const income = amounts.reduce((acc, item) => (acc += item >= 0 ? item : 0), 0).toFixed(2); 
  const expense = amounts.reduce((acc, item) => (acc += item < 0 ? Math.abs(item) : 0), 0).toFixed(2); 
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses
