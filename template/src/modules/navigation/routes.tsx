import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import NavigationLayoutsDashboard from './layouts/dashboard';
import AuthPagesLogin from '../auth/ui/pages/login';
import RequireNotLogged from './guards/require-not-logged';
import { history } from '../store/store';
import UsersPagesList from 'modules/users/ui/pages/list';
import RequireLogged from './guards/require-logged';

const AppRouter = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard/users" />} />
        <Route
          path="dashboard"
          element={
            <RequireLogged>
              <NavigationLayoutsDashboard />
            </RequireLogged>
          }
        >
          <Route index element={<Navigate replace to="users" />} />
          <Route path="users" element={<Outlet />}>
            <Route index element={<UsersPagesList />} />
          </Route>
        </Route>
        <Route
          path="/login"
          element={
            <RequireNotLogged>
              <AuthPagesLogin />
            </RequireNotLogged>
          }
        />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
