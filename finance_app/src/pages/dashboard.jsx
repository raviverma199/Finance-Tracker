import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
} from "recharts";

// Updated color scheme and typography
const DashboardContainer = styled.div`
  background-color: #f4f7fc; /* Lighter background */
  color: #333; /* Dark text */
  min-height: 100vh;
  padding: 20px;
  overflow-y: hidden; /* Prevent scroll on the main container */
  font-family: 'Poppins', sans-serif; /* Modern font */
`;

const Header = styled.header`
  background-color: #5c5c5c; /* Black header */
  padding: 9px 20px;
  color: #fff; /* White text */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fix the header at the top */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure it stays above other content */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin-bottom: 20px; /* Add margin below the header */
`;

const Title = styled.h1`
  font-size: 28px; /* Larger font */
  letter-spacing: 1.2px; /* Improve readability */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px; /* More spacing */
`;

const NavButton = styled(Link)`
  background-color: #fff; /* White button */
  color: #3b5998; /* Blue text */
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #5c85d6; /* Slightly darker blue on hover */
    color: #fff; /* White text */
  }
`;

const ContentContainer = styled.div`
  margin-top: 69px; /* Adjusted top margin */
  padding: 20px;
  overflow-y: auto; /* Allow vertical scrolling */
  height: calc(100vh - 90px); /* Adjust height based on the header */
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Larger card sizes */
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #fff; /* White card */
  padding: 30px;
  border-radius: 20px; /* Softer border radius */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05); /* Softer shadow */
 
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px); /* Hover effect */
  }
`;

const CardTitle = styled.h3`
  color: #3b5998; /* Blue text */
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const CardContent = styled.p`
  font-size: 17px; /* Reduced font size */
  font-weight: 600;
  color: #000;
`;

const TableContainer = styled.div`
  margin-top: 30px; /* Increased margin */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHead = styled.thead`
  background-color: #3b5998; /* Blue for table header */
  color: #fff; /* White text */
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0f0f0; /* Light gray for even rows */
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
`;

const TableHeading = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
  font-weight: 600;
`;

// Flex container for the charts
const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Space between charts */
  margin-top: 30px;
`;

export default function Dashboard() {
  const data = [
    { name: "Job", value: 500 },
    { name: "Side Hustle", value: 200 },
    { name: "Freelancer", value: 200 },
    // More data categories...
  ];

  return (
    <DashboardContainer>
      <Header>
        <Title>Finance Tracker Dashboard</Title>
        <NavLinks>
          <NavButton to="/income">Income</NavButton>
          <NavButton to="/expense">Expenses</NavButton>
          <NavButton to="/saving">Savings</NavButton>
          <NavButton to="/reports">Reports</NavButton>
        </NavLinks>
      </Header>

      <ContentContainer>
        {/* Financial Summary Cards */}
        <CardContainer>
          <Card>
            <CardTitle>Total Balance</CardTitle>
            <CardContent>$10,000</CardContent>
          </Card>

          <Card>
            <CardTitle>Income Breakdown</CardTitle>
            <CardContent>
              Salary: $8,000 <br /><br />
              Freelance: $2,000
            </CardContent>
          </Card>

          <Card>
            <CardTitle>Expense Breakdown</CardTitle>
            <CardContent>
              Rent: $2,000 <br /><br />
              Groceries: $500 <br /><br />
              Utilities: $300
            </CardContent>
          </Card>

          <Card>
            <CardTitle>Savings Breakdown</CardTitle>
            <CardContent>
              Emergency Fund: $1,500 <br /><br />
              Investments: $1,000
            </CardContent>
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

        {/* Charts */}
        <ChartContainer>
          <div style={{ flex: 1, marginRight: '15px',marginBottom: '50px' }}>
            <BarChart width={600} height={500} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3b5998" barSize={35} />
            </BarChart>
          </div>
          <div style={{ flex: 1 }}>
            <PieChart width={400} height={400}>
              <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={150} fill="#8884d8" />
            </PieChart>
          </div>
        </ChartContainer>
      </ContentContainer>
    </DashboardContainer>
  );
}
