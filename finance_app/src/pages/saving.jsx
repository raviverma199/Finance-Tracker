import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

export default function Saving() {
  return (
    <>
 <Header>
        <Title>Finance Tracker Dashboard</Title>
        <NavLinks>
          <NavButton to="/income">Income</NavButton>
          <NavButton to="/expense">Expenses</NavButton>
          <NavButton to="/saving">Savings</NavButton>
          <NavButton to="/reports">Reports</NavButton>
        </NavLinks>
      </Header>    </>
  );
}

