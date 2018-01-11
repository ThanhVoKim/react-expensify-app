import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={PublicRoute(LoginPage)} exact />
      <Header>
        <Switch>
          <Route path="/dashboard" component={PrivateRoute(ExpenseDashboardPage)} />
          <Route path="/create" component={PrivateRoute(AddExpensePage)} />
          <Route path="/edit/:id" component={PrivateRoute(EditExpensePage)} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Header>
    </Switch>
  </Router>
);

export default AppRouter;