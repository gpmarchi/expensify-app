import authReducer from "../../reducers/auth";

test("Should set default state", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("Should set uid for login", () => {
  const uid = "dkfgjdkljlkdjfewori";
  const action = {
    type: "LOGIN",
    uid
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

test("Should clear uid for logout", () => {
  const uid = "dkfgjdkljlkdjfewori";
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});
