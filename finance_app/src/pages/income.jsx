import React, { useState } from "react";
import "../components/css/IncomeTracker.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import apiCall from "../services/apicall";

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavButton = styled(Link)`
  background-color: #fff; /* White button */
  color: #000; /* Black text */
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #e0e0e0; /* Light gray on hover */
    color: #000; /* Black text */
  }
`;

const Header = styled.header`
  background-color: #5c5c5c; /* Soft black-gray header */
  padding: 15px 20px;
  border-radius: 8px;
  color: #fff; /* White text */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const NewIncomeTracker = () => {




  const data = [
    { name: 'Job', value: 500 },
    { name: 'Side Hustle', value: 200 },
    { name: 'Freelancer', value: 200 }
    // More data categories...
  ];

  const [incomeEntries, setIncomeEntries] = useState([]);
  const [formData, setFormData] = useState({
    source: "",
    amount: "",
    date: "",
    category: "",
    description: "",
    isRecurring: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addIncome = async(e) => {
    e.preventDefault();
    setIncomeEntries([...incomeEntries, formData]);
    setFormData({
      source: "",
      amount: "",
      date: "",
      category: "",
      description: "",
      isRecurring: false,
    });


    console.log(formData, 'This is the form Data')
    let EndPoint = "/api/createincome"

    const requestData = formData;

    const response = await apiCall("POST", EndPoint, requestData);

  };






  return (
    <div className="income-tracker-container">
      {/* Header Section */}
      <Header>
        <Title>Finance Tracker Dashboard</Title>
        <NavLinks>
          <NavButton to="/income">Income</NavButton>
          <NavButton to="/expense">Expenses</NavButton>
          <NavButton to="/saving">Savings</NavButton>
          <NavButton to="/reports">Reports</NavButton>
        </NavLinks>
      </Header>

      {/* Income Form */}
     <div className="income-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px' }}>
    <div className="income-form-section" style={{ width: '50%' }}>
        <h2>Add New Income (As Per Monthly Income)</h2>
        <form onSubmit={addIncome} className="income-form">
            <div className="form-group">
                <label htmlFor="source">Income Source</label>
                <input
                    type="text"
                    id="source"
                    name="source"
                    placeholder="e.g., Trading"
                    value={formData.source}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="e.g., 1500"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                    <option value="Custom">Custom</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description (optional)</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="e.g., Monthly grocery shopping"
                    value={formData.description}
                    onChange={handleInputChange}
                ></textarea>
            </div>

            <button type="submit" className="add-button">
                Add Income
            </button>
        </form>
    </div>

    <div className="income-paragraph" style={{ width: '45%', paddingLeft: '20px', textAlign: 'center' }}>
    <h3>About Income Tracking</h3>
    <p>
        Tracking your income is essential for effective financial management. By recording your income sources and amounts, you can better understand your cash flow and make informed decisions about budgeting and spending. Regularly updating your income records helps you stay on top of your finances and prepare for future financial goals.
    </p>

   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
    <BarChart width={600} height={500} data={data}> {/* Increased width and height */}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 14 }} /> {/* Increased font size for better readability */}
        <YAxis tick={{ fontSize: 14 }} />
        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
        <Legend wrapperStyle={{ fontSize: '14px' }} />
        <Bar dataKey="value" fill="#bbe4e9" /> {/* Changed color to a more vibrant red */}
    </BarChart>
</div>


</div>
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
        <h2>Income Summary</h2>
        <p>
          Total Income:{" "}
          <span style={{ fontWeight: "bold" }}>
            {incomeEntries
              .reduce(
                (total, entry) => total + parseFloat(entry.amount || 0),
                0
              )
              .toFixed(2)}
          </span>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <p>
            Monthly Income:{" "}
            <span style={{ fontWeight: "bold" }}>
              {incomeEntries
                .filter(
                  (entry) =>
                    new Date(entry.date).getMonth() === new Date().getMonth()
                )
                .reduce(
                  (total, entry) => total + parseFloat(entry.amount || 0),
                  0
                )
                .toFixed(2)}
            </span>
          </p>
          <p>
            Quarterly Income:{" "}
            <span style={{ fontWeight: "bold" }}>
              {incomeEntries
                .filter((entry) => {
                  const date = new Date(entry.date);
                  const currentDate = new Date();
                  return (
                    date.getQuarter() ===
                    Math.floor(currentDate.getMonth() / 3) + 1
                  );
                })
                .reduce(
                  (total, entry) => total + parseFloat(entry.amount || 0),
                  0
                )
                .toFixed(2)}
            </span>
          </p>
          <p>
            Yearly Income:{" "}
            <span style={{ fontWeight: "bold" }}>
              {incomeEntries
                .filter(
                  (entry) =>
                    new Date(entry.date).getFullYear() ===
                    new Date().getFullYear()
                )
                .reduce(
                  (total, entry) => total + parseFloat(entry.amount || 0),
                  0
                )
                .toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewIncomeTracker;
