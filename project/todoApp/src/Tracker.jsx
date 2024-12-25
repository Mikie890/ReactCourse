import { useState } from 'react';
import './App.css';
import { Transaction } from './Transaction';

function Tracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const addTransaction = () => {
    const transaction = {
      id: transactions.length === 0 ? 1 : transactions[transactions.length - 1].id + 1,
      description: description,
      amount: parseFloat(amount),
      type: type,
    };
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const calculateTotals = (type) => {
    return transactions
      .filter((transaction) => transaction.type === type)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const totalIncome = calculateTotals("income");
  const totalExpense = calculateTotals("expense");
  const balance = totalIncome - totalExpense;

  return (
    <div>
      <h1>Expense and Income Tracker</h1>
      <div>
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <h2>Balance: ${balance.toFixed(2)}</h2>
      <h3>Total Income: ${totalIncome.toFixed(2)}</h3>
      <h3>Total Expenses: ${totalExpense.toFixed(2)}</h3>
      <div>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            description={transaction.description}
            amount={transaction.amount}
            type={transaction.type}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </div>
    </div>
  );
}

export default Tracker;
