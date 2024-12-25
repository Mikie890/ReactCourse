import React from 'react';

const Balance = ({ transactions }) => {
const total = transactions
.reduce((acc, transaction) => acc + (transaction.amount || 0), 0);
  

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4">
      <h2 className="text-lg font-medium">Your Balance</h2>
      <p className="text-3xl font-bold">${total.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
