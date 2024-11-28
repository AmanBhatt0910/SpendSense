import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
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
// const apiUrl = import.meta.env.VITE_API_URL;
//       if (!apiUrl) {
//         console.error('API URL is not defined in environment variables.');
//         return;
//       }