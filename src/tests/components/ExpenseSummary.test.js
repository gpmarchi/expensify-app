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
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={expenses[0].amount} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpensesSummary with multiple expenses correctly", () => {
  const expensesTotal = selectExpensesTotal(expenses);
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={expenses.length}
      expensesTotal={expensesTotal}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
