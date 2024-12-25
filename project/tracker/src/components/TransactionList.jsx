import React, { useState } from 'react';

const TransactionList = ({ transactions, deleteTransaction, editTransaction }) => {
  const [editId, setEditId] = useState(null);
  const [editDescription, setEditDescription] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [dropdownId, setDropdownId] = useState(null);

  const handleEdit = (transaction) => {
    setEditId(transaction.id);
    setEditDescription(transaction.description);
    setEditAmount(transaction.amount);
  };

  const handleSave = () => {
    editTransaction(editId, {
      description: editDescription,
      amount: parseFloat(editAmount),
    });
    setEditId(null);
    setEditDescription('');
    setEditAmount('');
  };

  const toggleDropdown = (id) => {
    setDropdownId(dropdownId === id ? null : id);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4">
      <h3 className="text-lg font-medium mb-4">Transactions</h3>
      <ul className="space-y-2">
        {transactions.map((transaction) =>
          transaction.id === editId ? (
            <li key={transaction.id} className="flex justify-between p-3 bg-gray-100 rounded-lg">
              <input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="w-1/2 p-2 border rounded-lg"
              />
              <input
                type="number"
                value={editAmount}
                onChange={(e) => setEditAmount(e.target.value)}
                className="w-1/4 p-2 border rounded-lg"
              />
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditId(null)}
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </li>
          ) : (
            <li
              key={transaction.id}
              className={`p-3 rounded-lg ${
                transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span>{transaction.description}</span>
                  <span className="ml-4">${transaction.amount.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => toggleDropdown(transaction.id)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  ▼
                </button>
              </div>
              {dropdownId === transaction.id && (
                <div className="mt-2 flex justify-between">
                  <button
                    onClick={() => handleEdit(transaction)}
                    className="bg-yellow-500 text-white flex-grow py-2 rounded-lg text-sm sm:text-base hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTransaction(transaction.id)}
                    className="bg-red-500 text-white flex-grow py-2 rounded-lg text-sm sm:text-base hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
              </div>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
