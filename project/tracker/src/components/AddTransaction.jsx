import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate inputs
    if (!description.trim()) {
      alert("Please enter a description.");
      return;
    }
  
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount.");
      return;
    }
  
    const transaction = {
      description,
      amount: parseFloat(amount), // Convert to a valid number
    };
  
    addTransaction(transaction);
  
    // Reset input fields
    setDescription('');
    setAmount('');
  };
  

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium mb-4">Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Amount (negative for expense)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
