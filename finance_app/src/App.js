import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import NewIncomeTracker from "./pages/income";
import Expense from "./pages/expense";
import Saving from "./pages/saving";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/income" element={<NewIncomeTracker/>} />
          <Route path="/expense" element={<Expense/>} />
          <Route path="/saving" element={<Saving/>} />
        </Routes>
      </Router>{" "}
    </>
  );
}

export default App;
