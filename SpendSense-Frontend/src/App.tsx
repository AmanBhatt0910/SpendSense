import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Reports from "./pages/Reports";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories.tsx";
import Transactions from "./pages/Transactions";
import Goals from "./pages/Goals";
import Notifications from "./pages/Notifications";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Layout>
  );
};

export default App;
