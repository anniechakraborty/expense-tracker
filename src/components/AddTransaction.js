import React, { useState, useContext } from 'react';
import { GlobalState } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalState);

  const onSubmit = (e)=>{
    e.preventDefault();

    const newTransaction = {
      id : Math.floor(Math.random() * 1000000000),
      text, // if the key and value have the same name, we can just write like this. so its basically same as text : text
      amount : +amount // the + before amount converts the string into a number
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={
            (e) => {
              setText(e.target.value)
            }
          } placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input type="number" id="amount" value={amount} onChange={
            (e) => {
              setAmount(e.target.value)
            }
          } placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
