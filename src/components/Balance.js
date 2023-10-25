import React, { useContext } from 'react'
import { GlobalState } from '../context/GlobalState';

function Balance() {
  const { transactions } = useContext(GlobalState);
  const amounts = transactions.map(trans => trans.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // need better explanation of this line
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
