import React, { useState } from 'react';
import './../styles/Home.css';

const Home = () => {
  const [balance, setBalance] = useState('');
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');

  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    type: 'expense',
    amount: '',
    category: '',
    date: '',
  });

  const [spending, setSpending] = useState([]);
  const [newSpending, setNewSpending] = useState({ category: '', amount: '' });

  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    name: '',
    target: '',
    saved: '',
  });

  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({ name: '', dueDate: '' });

  const handleTransactionSubmit = () => {
    if (newTransaction.amount && newTransaction.category && newTransaction.date) {
      setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
      setNewTransaction({ type: 'expense', amount: '', category: '', date: '' });
    }
  };

  const handleSpendingSubmit = () => {
    if (newSpending.category && newSpending.amount) {
      setSpending([...spending, { ...newSpending, id: Date.now() }]);
      setNewSpending({ category: '', amount: '' });
    }
  };

  const handleGoalSubmit = () => {
    if (newGoal.name && newGoal.target && newGoal.saved) {
      setGoals([...goals, { ...newGoal, id: Date.now() }]);
      setNewGoal({ name: '', target: '', saved: '' });
    }
  };

  const handleBillSubmit = () => {
    if (newBill.name && newBill.dueDate) {
      setBills([...bills, { ...newBill, id: Date.now() }]);
      setNewBill({ name: '', dueDate: '' });
    }
  };

  return (
    <div className="home-container">
      <h1>FinBud Dashboard</h1>

      <section className="section">
        <h2>Account Overview</h2>
        <div className="input-group">
          <input type="number" placeholder="Enter Balance" value={balance} onChange={(e) => setBalance(e.target.value)} />
          <input type="number" placeholder="Total Income" value={income} onChange={(e) => setIncome(e.target.value)} />
          <input type="number" placeholder="Total Expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
        </div>
        <p>Balance: ${balance || 0}</p>
        <p>Total Income: ${income || 0}</p>
        <p>Total Expenses: ${expenses || 0}</p>
      </section>

      <section className="section">
        <h2>Add Transaction</h2>
        <div className="input-group">
          <select value={newTransaction.type} onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <input type="number" placeholder="Amount" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} />
          <input type="text" placeholder="Category" value={newTransaction.category} onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })} />
          <input type="date" value={newTransaction.date} onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })} />
          <button onClick={handleTransactionSubmit}>Add Transaction</button>
        </div>
      </section>

      <section className="section">
        <h2>Spending Breakdown</h2>
        <div className="input-group">
          <input type="text" placeholder="Category" value={newSpending.category} onChange={(e) => setNewSpending({ ...newSpending, category: e.target.value })} />
          <input type="number" placeholder="Amount" value={newSpending.amount} onChange={(e) => setNewSpending({ ...newSpending, amount: e.target.value })} />
          <button onClick={handleSpendingSubmit}>Add Spending</button>
        </div>
        <ul>
          {spending.map((item) => (
            <li key={item.id}>{item.category}: ${item.amount}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Financial Goals</h2>
        <div className="input-group">
          <input type="text" placeholder="Goal Name" value={newGoal.name} onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })} />
          <input type="number" placeholder="Target Amount" value={newGoal.target} onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })} />
          <input type="number" placeholder="Amount Saved" value={newGoal.saved} onChange={(e) => setNewGoal({ ...newGoal, saved: e.target.value })} />
          <button onClick={handleGoalSubmit}>Add Goal</button>
        </div>
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              {goal.name}: ${goal.saved} / ${goal.target}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Recent Transactions</h2>
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id}>
              {tx.date} - {tx.category}: ${tx.amount} ({tx.type})
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Upcoming Bills</h2>
        <div className="input-group">
          <input type="text" placeholder="Bill Name" value={newBill.name} onChange={(e) => setNewBill({ ...newBill, name: e.target.value })} />
          <input type="date" value={newBill.dueDate} onChange={(e) => setNewBill({ ...newBill, dueDate: e.target.value })} />
          <button onClick={handleBillSubmit}>Add Bill</button>
        </div>
        <ul>
          {bills.map((bill) => (
            <li key={bill.id}>
              {bill.name} - Due {bill.dueDate}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
