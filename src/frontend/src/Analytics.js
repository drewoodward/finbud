// Analytics.js
import React from 'react';
import './analytics.css'; // Import the styles

function Analytics() {
  return (
    <div className="analytics-container">
      <h2 className="analytics-header">Financial Analytics</h2>

      {/* Historical Spending Data Section */}
      <div className="analytics-section">
        <h3>Historical Spending Data</h3>
        <div className="analytics-card">
          <h4>Monthly Spending</h4>
          <p>Data visualization (e.g., chart or graph) showing spending over the last 6 months</p>
        </div>
      </div>

      {/* Market Predictions Section */}
      <div className="analytics-section">
        <h3>Market Predictions</h3>
        <div className="analytics-card">
          <h4>Predicted Stock Performance</h4>
          <p>Graphical representation of market predictions based on current trends</p>
        </div>
      </div>

      {/* Key Market Insights Section */}
      <div className="analytics-section">
        <h3>Key Market Insights</h3>
        <div className="analytics-card">
          <h4>Financial Trends</h4>
          <p>Insights into financial market trends, stock performance, and economic forecasts</p>
        </div>
      </div>

      <div className="analytics-footer">
        <p>Last updated: April 3, 2025</p>
      </div>
    </div>
  );
}

export default Analytics;
