import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import AdminSidebar from './components/AdminSidebar';
import Dashboard from './pages/Dashboard';
import Reportings from './pages/Reportings';
import Boutique from './pages/Boutique';
import Factures from './pages/Factures';
import Forfait from './pages/Forfait';
import ServicesUniquePage from "./pages/service-unique/ServiceUniquePage";
import MesServices from './pages/MesServices';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Register from './pages/Register';
import BuyPoints from './pages/BuyPoints';
import VincaCircleDashboard from './pages/tilmepoint.tsx';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/home';
import BuyPointsPage from './pages/page';
import AdminUsers from './pages/AdminUsers';
import FormulaireAvance from './pages/mon-formulaire-admin/page';
import BoutiqueAdmin from './pages/BoutiqueAdmin';
import './App.css';

function MainApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdminAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        {isAdminAuthenticated ? (
          <>
            <Route path="/admin-dashboard" element={
              <div className="flex h-screen bg-gray-100">
                {/* <AdminSidebar onLogout={handleLogout} /> */}
                <div className="flex-1 flex flex-col overflow-hidden ml-64">
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <AdminDashboard />
                  </main>
                </div>
              </div>
            } />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/formulaire-avance" element={<FormulaireAvance />} />
            <Route path="/boutiqueadmin" element={<BoutiqueAdmin />} />
          </>
        ) : null}

        {isAuthenticated ? (
          <>
            <Route path="/dashboard" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <Dashboard />
                  </main>
                </div>
              </div>
            } />
            <Route path="/reportings" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <Reportings />
                  </main>
                </div>
              </div>
            } />
            <Route path="/boutique" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <Boutique />
                  </main>
                </div>
              </div>
            } />
            <Route path="/factures" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <Factures />
                  </main>
                </div>
              </div>
            } />
            <Route path="/mes-services" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <MesServices />
                  </main>
                </div>
              </div>
            } />
            <Route path="/forfait" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <Forfait />
                  </main>
                </div>
              </div>
            } />
            <Route path="/service-unique" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <ServicesUniquePage />
                  </main>
                </div>
              </div>
            } />
            <Route path="/buy-points" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <BuyPoints />
                  </main>
                </div>
              </div>
            } />
            <Route path="/tilmepoint" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <VincaCircleDashboard />
                  </main>
                </div>
              </div>
            } />
            <Route path="/page" element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar onLogout={handleLogout} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <BuyPointsPage />
                  </main>
                </div>
              </div>
            } />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/admin-login" element={<AdminLogin onLogin={handleAdminLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to={isAdminAuthenticated ? "/admin-dashboard" : "/"} replace />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default MainApp; 