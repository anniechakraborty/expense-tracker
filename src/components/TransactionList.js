import React, { useContext } from 'react';
import { GlobalState } from './../context/GlobalState';
import Transactions from './Transactions';

const TransactionList = () => {
  const { transactions } = useContext(GlobalState);
  console.log('Transaction : ', transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(trans => (
          <Transactions key={trans.id} transaction={trans} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
