import React from 'react';
import './../styles/About.css'; // Ensure you have About.css for styling

function About() {
  return (
    <div className="container">
      <h1>About FinBud</h1>
      <p>
        Welcome to <strong>FinBud</strong>, your personal finance assistant designed to help you manage budgets, 
        track expenses, and plan for your financial goals. Whether you're saving for a big purchase, analyzing your 
        spending habits, or looking for insights into your financial health, Financial Buddy provides intuitive tools 
        to keep you on track.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Smart Budgeting</strong> – Categorize expenses, monitor cash flow, and receive AI-driven insights.</li>
        <li><strong>Analytics & Trends</strong> – View historical graphs, spending patterns, and future financial predictions.</li>
        <li><strong>Goal Planning</strong> – Set and track savings goals for big purchases or financial milestones.</li>
        <li><strong>AI-Powered Assistance</strong> – Get real-time financial insights and recommendations through our built-in assistant.</li>
      </ul>

      <h2>Legal Disclaimer</h2>
      <p className="legal">
        <strong>FinBud is not a financial institution, investment advisor, or certified financial planner.</strong> 
        The information and insights provided by this app are for informational purposes only and should not be considered 
        financial, investment, tax, or legal advice.
      </p>
      <p className="legal">
        By using FinBud, you acknowledge that all financial decisions are made at your own discretion and risk. 
        We strongly encourage users to consult with a professional financial advisor before making significant financial decisions.
      </p>
      <p className="legal">
        <strong>Data Privacy & Security:</strong> We prioritize your privacy and take security measures to protect your financial 
        data. However, Finbud is not responsible for any unauthorized access, financial losses, or inaccuracies 
        resulting from user input or third-party integrations.
      </p>
      <p className="legal">
        For more details, please review our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
}

export default About;


