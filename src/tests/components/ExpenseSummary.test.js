import React from "react";
import { shallow } from "enzyme";
import numeral from "numeral";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";

test("Should render ExpensesSummary with 0 expenses correctly", () => {
  const expenseCount = 0;
  const expensesTotal = numeral(0).format("$0,0.00");
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={expenseCount}
      expensesTotal={expensesTotal}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpensesSummary with 1 expense correctly", () => {
  const expenseCount = 1;
  const expensesTotal = numeral(expenses[0].amount / 100).format("$0,0.00");
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={expenseCount}
      expensesTotal={expensesTotal}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpensesSummary with multiple expenses correctly", () => {
  const expenseCount = expenses.length;
  const expensesTotal = numeral(selectExpensesTotal(expenses) / 100).format(
    "$0,0.00"
  );
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={expenseCount}
      expensesTotal={expensesTotal}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
