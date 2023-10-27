import React, {useContext} from 'react'
import { GlobalState } from '../context/GlobalState';

const Transactions = ({transaction}) => {
    let sign = transaction.amount  >= 0 ? "+" : "-";
    const { delTransaction } = useContext(GlobalState);
  return (
    <li className={`${transaction.amount >= 0 ? "plus" : "minus"}`}>
        {transaction.text} <span> {sign} ${Math.abs(transaction.amount)} </span>
        <button className="delete-btn" onClick={()=> delTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default Transactions
