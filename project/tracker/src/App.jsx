import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Add transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: uuidv4() }]);
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  // Edit transaction
  const editTransaction = (id, updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === id ? { ...transaction, ...updatedTransaction } : transaction
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Income & Expense Tracker</h1>
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;
