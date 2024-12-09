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
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/income" element={<Layout><Income /></Layout>} />
      <Route path="/expense" element={<Layout><Expense /></Layout>} />
      <Route path="/settings" element={<Layout><Setting /></Layout>} />
      <Route path="/categories" element={<Layout><Categories /></Layout>} />
      <Route path="/transactions" element={<Layout><Transactions /></Layout>} />
      <Route path="/goals" element={<Layout><Goals /></Layout>} />
      <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
    </Routes>
  );
};

export default App;