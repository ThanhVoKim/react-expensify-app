import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import expensesTotal from '../selectors/expenses-total';
import expensesVisible from '../selectors/expenses';

const ExpensesSummary = ({ expensesCount, total }) => {
  const word = expensesCount > 0 ? 'expenses' : 'expense';
  const totalFormat = numeral(total / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span> {word} totalling <span>{totalFormat}</span>
        </h1>
        <div className="page-header__action">
          <Link className="button" to="/create"> Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = expensesVisible(state.expenses, state.filters);
  return {
    expensesCount: state.expenses.length,
    total: expensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);