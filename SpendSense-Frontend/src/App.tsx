import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Reports from "./pages/Reports";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Setting/>} />
      </Routes>
    </Layout>
  );
};

export default App;