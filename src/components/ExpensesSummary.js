import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = props => (
  <div>
    <p>
      Viewing {props.expenseCount} expense(s) totalling {props.expensesTotal}
    </p>
  </div>
);

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const visibleExpensesTotal = selectExpensesTotal(visibleExpenses);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: numeral(visibleExpensesTotal / 100).format("$0,0.00")
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
