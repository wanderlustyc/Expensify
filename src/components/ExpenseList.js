import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import {getVisibleExpenses} from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>This is ExpenseList Component</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);