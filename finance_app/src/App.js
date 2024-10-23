import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import IncomeTracker from "./pages/income";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/income" element={<IncomeTracker/>} />
        </Routes>
      </Router>{" "}
    </>
  );
}

export default App;
