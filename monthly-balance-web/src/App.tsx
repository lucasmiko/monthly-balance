import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rota pública */}
          <Route path="/login" element={<Login />} />

          {/* Rota protegida */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
