import React from 'react';

const IncomeExpense = ({ transactions }) => {
  const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0);

  return (
    <div className="flex justify-between bg-white shadow rounded-lg p-6 mb-4">
      <div>
        <h3 className="text-lg font-medium text-green-500">Income</h3>
        <p className="text-2xl font-bold">${income.toFixed(2)}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-red-500">Expense</h3>
        <p className="text-2xl font-bold">${expense.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
