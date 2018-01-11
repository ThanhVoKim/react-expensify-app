import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses, resetExpense } from './actions/expenses';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let render = false;
const renderApp = () => {
  if (!render) {
    ReactDOM.render(jsx, document.getElementById('app'));
    render = true;
  }
};

const setExpenses = async () => {
  await store.dispatch(startSetExpenses());
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch({
      type: 'LOGIN',
      uid: user.uid
    });
    setExpenses().then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    history.push('/');
    store.dispatch(resetExpense());
    renderApp();
  }
});
