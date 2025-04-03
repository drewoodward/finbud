import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import "./Home.css";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [goals, setGoals] = useState([
    { id: 1, name: "Save for a Car", progress: 60, target: "$10,000", saved: "$6,000" },
    { id: 2, name: "Emergency Fund", progress: 30, target: "$5,000", saved: "$1,500" }
  ]);
  const [categorizedSpending, setCategorizedSpending] = useState({
    Food: 150,
    Shopping: 200,
    Bills: 500,
    Entertainment: 75,
    Other: 100
  });
=======
import './Home.css';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [widgets, setWidgets] = useState([
    "accountOverview",
    "recentTransactions",
    "spendingHeatmap",
    "billReminders"
  ]);
>>>>>>> fbc0992c (directory cleanup)

  useEffect(() => {
    // Fetch transactions (replace with API call later)
    const dummyTransactions = [
      { id: 1, type: "expense", amount: "$20", category: "Food", date: "Apr 1" },
      { id: 2, type: "income", amount: "$2000", category: "Salary", date: "Mar 30" },
<<<<<<< HEAD
      { id: 3, type: "expense", amount: "$50", category: "Shopping", date: "Mar 28" }
=======
      { id: 3, type: "expense", amount: "$50", category: "Shopping", date: "Mar 28" },
>>>>>>> fbc0992c (directory cleanup)
    ];
    setTransactions(dummyTransactions);
  }, []);

  return (
    <div className="home-container">
<<<<<<< HEAD
      
      {/* Account Overview */}
      <section className="account-overview">
        <h2>Account Overview</h2>
        <p>Balance: $5,200</p>
        <p>Total Income: $10,000</p>
        <p>Total Expenses: $4,800</p>
      </section>

      {/* Categorized Spending */}
      <section className="categorized-spending">
        <h2>Spending Breakdown</h2>
        <ul>
          {Object.entries(categorizedSpending).map(([category, amount]) => (
            <li key={category}>
              {category}: ${amount}
            </li>
          ))}
        </ul>
      </section>

      {/* Goals & Progress */}
      <section className="goals-progress">
        <h2>Financial Goals</h2>
        {goals.map((goal) => (
          <div key={goal.id} className="goal">
            <p>{goal.name} ({goal.saved} / {goal.target})</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${goal.progress}%` }}></div>
            </div>
          </div>
        ))}
      </section>

      {/* Recent Transactions */}
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

      {/* Spending Heatmap Placeholder */}
      <section className="spending-heatmap">
        <h2>Spending Heatmap</h2>
        <p>[Graph Placeholder]</p>
      </section>

      {/* Upcoming Bills */}
      <section className="bill-reminders">
        <h2>Upcoming Bills</h2>
        <ul>
          <li>Rent - Due Apr 5</li>
          <li>Electricity - Due Apr 10</li>
        </ul>
      </section>
      
=======
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
>>>>>>> fbc0992c (directory cleanup)
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;

>>>>>>> fbc0992c (directory cleanup)
