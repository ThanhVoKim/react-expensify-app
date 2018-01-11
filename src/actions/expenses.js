import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';


// ---SET EXPENSES ---

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenses = [];
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    }).then(() => {
      dispatch(setExpenses(expenses));
    });
  };
}

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (dataExpense = {}) => {
  return (dispatch, getState) => {
    // default expense data
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = dataExpense;
    const uid = getState().auth.uid;
    const expense = { description, note, amount, createdAt };
    database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
}

// REST_EXPENSE
export const resetExpense = () => ({
  type: 'RESET_EXPENSE'
});