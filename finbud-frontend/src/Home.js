import React, { useState, useEffect } from "react";
import './Home.css';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [widgets, setWidgets] = useState([
    "accountOverview",
    "recentTransactions",
    "spendingHeatmap",
    "billReminders"
  ]);

  useEffect(() => {
    // Fetch transactions (replace with API call later)
    const dummyTransactions = [
      { id: 1, type: "expense", amount: "$20", category: "Food", date: "Apr 1" },
      { id: 2, type: "income", amount: "$2000", category: "Salary", date: "Mar 30" },
      { id: 3, type: "expense", amount: "$50", category: "Shopping", date: "Mar 28" },
    ];
    setTransactions(dummyTransactions);
  }, []);

  return (
    <div className="home-container">
      {widgets.includes("accountOverview") && (
        <section className="account-overview">
          <h2>Account Overview</h2>
          <p>Balance: $5,200</p>
          <p>Total Income: $10,000</p>
          <p>Total Expenses: $4,800</p>
        </section>
      )}

      {widgets.includes("recentTransactions") && (
        <section className="recent-transactions">
          <h2>Recent Transactions</h2>
          <ul>
            {transactions.map((tx) => (
              <li key={tx.id} className={tx.type}>
                {tx.date} - {tx.category}: {tx.amount}
              </li>
            ))}
          </ul>
        </section>
      )}

      {widgets.includes("spendingHeatmap") && (
        <section className="spending-heatmap">
          <h2>Spending Heatmap</h2>
          <p>[Graph Placeholder]</p>
        </section>
      )}

      {widgets.includes("billReminders") && (
        <section className="bill-reminders">
          <h2>Upcoming Bills</h2>
          <ul>
            <li>Rent - Due Apr 5</li>
            <li>Electricity - Due Apr 10</li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default Home;

