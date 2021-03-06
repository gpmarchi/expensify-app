import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const expense = {
    id: "4",
    description: "Whatever",
    note: "",
    amount: 999,
    createdAt: 5000
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("Should edit an expense", () => {
  const expense = {
    id: expenses[0].id,
    description: "Bubble gum",
    note: "Some bubble gum",
    amount: 999,
    createdAt: 5000
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expense, expenses[1], expenses[2]]);
});

test("Should not edit an expense if not found", () => {
  const expense = {
    id: expenses[0].id,
    description: "Bubble gum",
    note: "Some bubble gum",
    amount: 999,
    createdAt: 5000
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
