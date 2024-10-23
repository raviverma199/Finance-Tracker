import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  background-color: #ffffff;
  color: #1c1c1e;
  min-height: 100vh;
  padding: 20px;
  font-family: Arial, sans-serif; /* Updated font */
`;

const Header = styled.header`
  background-color: #1c1c1e;
  padding: 15px 20px;
  border-radius: 8px;
  color: #f5f5f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #f5f5f7;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavButton = styled(Link)`
  background-color: #f5f5f7;
  color: #1c1c1e;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Added shadow */

  &:hover {
    background-color: #e5e5e7;
    transform: translateY(-2px); /* Added lift effect */
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Deeper shadow */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
  }
`;

const CardTitle = styled.h3`
  color: #1c1c1e;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHead = styled.thead`
  background-color: #1c1c1e;
  color: #f5f5f7;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #e5e5e7; /* Hover effect on rows */
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const TableHeading = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header>
        <Title>Finance Tracker Dashboard</Title>
        <NavLinks>
          <NavButton to="/income">Income</NavButton>
          <NavButton to="/expenses">Expenses</NavButton>
          <NavButton to="/savings">Savings</NavButton>
          <NavButton to="/investments">Investments</NavButton>
          <NavButton to="/reports">Reports</NavButton>
          <NavButton to="/goals">Goals</NavButton>
        </NavLinks>
      </Header>

      {/* Financial Summary Cards */}
      <CardContainer>
        <Card>
          <CardTitle>Total Balance</CardTitle>
          <p>$10,000</p>
        </Card>

        <Card>
          <CardTitle>Income Breakdown</CardTitle>
          <p>Salary: $8,000</p>
          <p>Freelance: $2,000</p>
        </Card>

        <Card>
          <CardTitle>Expense Breakdown</CardTitle>
          <p>Rent: $2,000</p>
          <p>Groceries: $500</p>
        </Card>

        <Card>
          <CardTitle>Savings Breakdown</CardTitle>
          <p>Emergency Fund: $1,500</p>
          <p>Investments: $1,000</p>
        </Card>
      </CardContainer>

      {/* Recent Transactions Table */}
      <TableContainer>
        <CardTitle>Recent Transactions</CardTitle>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableHeading>Date</TableHeading>
              <TableHeading>Description</TableHeading>
              <TableHeading>Category</TableHeading>
              <TableHeading>Amount</TableHeading>
              <TableHeading>Status</TableHeading>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>2024-10-23</TableCell>
              <TableCell>Groceries</TableCell>
              <TableCell>Food</TableCell>
              <TableCell>-$100</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-10-22</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Income</TableCell>
              <TableCell>+$2,000</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-10-21</TableCell>
              <TableCell>Rent</TableCell>
              <TableCell>Housing</TableCell>
              <TableCell>-$500</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </tbody>
        </StyledTable>
      </TableContainer>
    </DashboardContainer>
  );
}
