import React, { useState } from 'react';
import '../components/css/IncomeTracker.css'

const IncomeTracker = () => {
  const [incomeEntries, setIncomeEntries] = useState([]);
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: '',
    category: '',
    description: '',
    isRecurring: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const addIncome = (e) => {
    e.preventDefault();
    setIncomeEntries([...incomeEntries, formData]);
    setFormData({
      source: '',
      amount: '',
      date: '',
      category: '',
      description: '',
      isRecurring: false,
    });
  };

  return (
    <div className="income-tracker-container">
      {/* Header Section */}
      <header className="header">
        <h1>Income Tracker</h1>
       
      </header>

      {/* Income Form */}
      <div className="income-form-section">
        <h2>Add New Income</h2>
        <form onSubmit={addIncome} className="income-form">
          <input
            type="text"
            name="source"
            placeholder="Income Source"
            value={formData.source}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Salary">Salary</option>
            <option value="Business">Business</option>
            <option value="Gift">Gift</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="description"
            placeholder="Description (optional)"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <label>
            <input
              type="checkbox"
              name="isRecurring"
              checked={formData.isRecurring}
              onChange={handleInputChange}
            />
            Recurring Income
          </label>
          <button type="submit" className="add-button">Add</button>
        </form>
      </div>

      {/* Income Table */}
      <div className="income-table-section">
        <h2>Income Records</h2>
        <table className="income-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Source</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {incomeEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.source}</td>
                <td>{entry.amount}</td>
                <td>{entry.category}</td>
                <td>{entry.description}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <h2>Summary</h2>
        <p>Total Income: {/* Calculate total income here */}</p>
        <p>Monthly Income: {/* Calculate monthly income here */}</p>
        <p>Highest Income Source: {/* Display highest income source here */}</p>
        <p>Recurring Income: {/* Display recurring income total here */}</p>
      </div>
    </div>
  );
};

export default IncomeTracker;
